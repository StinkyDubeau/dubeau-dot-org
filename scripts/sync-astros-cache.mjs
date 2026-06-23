import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const DISCORD_API_BASE = "https://discord.com/api/v10";
const ROOT = process.cwd();
const OUT_FILE = path.join(ROOT, "public", "data", "astro-sightings.json");
const MEDIA_DIR = path.join(ROOT, "public", "astro-media");
const MAX_LIMIT = 100;

async function loadDotEnv(file) {
    try {
        const contents = await fs.readFile(path.join(ROOT, file), "utf8");
        contents.split(/\r?\n/).forEach((line) => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith("#")) return;
            const index = trimmed.indexOf("=");
            if (index === -1) return;
            const key = trimmed.slice(0, index).trim();
            const value = trimmed.slice(index + 1).trim().replace(/^"|"$/g, "");
            if (key && process.env[key] === undefined) {
                process.env[key] = value;
            }
        });
    } catch (error) {
        if (error.code !== "ENOENT") throw error;
    }
}

function argValue(name, fallback) {
    const prefix = `${name}=`;
    const found = process.argv.find((arg) => arg.startsWith(prefix));
    return found ? found.slice(prefix.length) : fallback;
}

function classifyMedia(contentType = "", filename = "") {
    const type = contentType.toLowerCase();
    const name = filename.toLowerCase();

    if (type.startsWith("image/")) return "image";
    if (type.startsWith("video/")) return "video";
    if (type.startsWith("audio/")) return "audio";
    if (/\.(png|jpe?g|gif|webp|avif)$/i.test(name)) return "image";
    if (/\.(mp4|webm|mov)$/i.test(name)) return "video";
    if (/\.(mp3|wav|ogg|m4a)$/i.test(name)) return "audio";
    return "file";
}

function safeFilename(value) {
    return value
        .replace(/[^a-z0-9._-]+/gi, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 120);
}

function avatarUrl(author) {
    if (!author?.id || !author?.avatar) return null;
    const extension = author.avatar.startsWith("a_") ? "gif" : "png";
    return `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.${extension}?size=128`;
}

function normalizeAttachment(attachment) {
    const kind = classifyMedia(attachment.content_type, attachment.filename);

    return {
        id: String(attachment.id),
        url: attachment.url,
        proxyUrl: attachment.proxy_url || null,
        filename: attachment.filename || "attachment",
        contentType: attachment.content_type || null,
        width: attachment.width || null,
        height: attachment.height || null,
        size: attachment.size || null,
        kind,
    };
}

function normalizeEmbed(embed, index) {
    return {
        id: `${embed.url || embed.title || "embed"}-${index}`,
        title: embed.title || null,
        description: embed.description || null,
        url: embed.url || null,
        imageUrl: embed.image?.url || null,
        thumbnailUrl: embed.thumbnail?.url || null,
        provider: embed.provider?.name || null,
    };
}

function buildMedia(attachments, embeds) {
    const attachmentMedia = attachments
        .filter((attachment) => ["image", "video"].includes(attachment.kind))
        .map((attachment) => ({
            source: "attachment",
            kind: attachment.kind,
            url: attachment.url,
            previewUrl: attachment.proxyUrl || attachment.url,
            alt: attachment.filename,
            width: attachment.width,
            height: attachment.height,
        }));

    const embedMedia = embeds
        .flatMap((embed) => [
            embed.imageUrl && {
                source: "embed",
                kind: "image",
                url: embed.imageUrl,
                previewUrl: embed.thumbnailUrl || embed.imageUrl,
                alt: embed.title || "Embedded image",
                width: null,
                height: null,
            },
            embed.thumbnailUrl &&
                embed.thumbnailUrl !== embed.imageUrl && {
                    source: "embed",
                    kind: "image",
                    url: embed.thumbnailUrl,
                    previewUrl: embed.thumbnailUrl,
                    alt: embed.title || "Embedded thumbnail",
                    width: null,
                    height: null,
                },
        ])
        .filter(Boolean);

    return [...attachmentMedia, ...embedMedia];
}

function normalizeMessage(message, fallbackGuildId) {
    const guildId = message.guild_id || fallbackGuildId || null;
    const attachments = (message.attachments || []).map(normalizeAttachment);
    const embeds = (message.embeds || []).map(normalizeEmbed);
    const displayName =
        message.member?.nick ||
        message.author?.global_name ||
        message.author?.username ||
        "Unknown observer";

    return {
        id: String(message.id),
        channelId: String(message.channel_id),
        guildId,
        jumpUrl: guildId
            ? `https://discord.com/channels/${guildId}/${message.channel_id}/${message.id}`
            : null,
        createdAt: message.timestamp,
        editedAt: message.edited_timestamp || null,
        author: {
            id: String(message.author?.id || ""),
            name: message.author?.username || displayName,
            displayName,
            avatarUrl: avatarUrl(message.author),
            isBot: Boolean(message.author?.bot),
        },
        content: message.content || "",
        attachments,
        embeds,
        reactions: (message.reactions || []).map((reaction) => ({
            emoji: reaction?.emoji?.name || reaction?.emoji?.id || "",
            count: Number(reaction?.count || 0),
        })),
        media: buildMedia(attachments, embeds),
    };
}

async function fetchDiscordMessages(limit) {
    const url = new URL(
        `${DISCORD_API_BASE}/channels/${process.env.DISCORD_ASTRO_CHANNEL_ID}/messages`,
    );
    url.searchParams.set("limit", String(limit));

    const response = await fetch(url, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
    });

    if (!response.ok) {
        let body = null;
        try {
            body = await response.json();
        } catch {
            body = {};
        }
        throw new Error(
            `Discord request failed with ${response.status}: ${body.message || "unknown error"}`,
        );
    }

    return response.json();
}

async function downloadMedia(items) {
    await fs.mkdir(MEDIA_DIR, { recursive: true });

    for (const item of items) {
        for (const media of item.media) {
            if (!["image", "video"].includes(media.kind)) continue;
            if (!media.url) continue;

            const originalUrl = media.url;
            const extension = path.extname(new URL(media.url).pathname) || "";
            const fileName = safeFilename(
                `${item.id}-${media.source}-${media.alt || "media"}${extension}`,
            );
            const outPath = path.join(MEDIA_DIR, fileName);
            const publicPath = `/astro-media/${fileName}`;

            const response = await fetch(media.url);
            if (!response.ok) {
                console.warn(`Skipped media ${media.url}: ${response.status}`);
                continue;
            }

            const buffer = Buffer.from(await response.arrayBuffer());
            await fs.writeFile(outPath, buffer);
            media.url = publicPath;
            media.previewUrl = publicPath;

            const attachment = item.attachments.find(
                (candidate) =>
                    candidate.url === originalUrl ||
                    candidate.filename === media.alt,
            );
            if (attachment) {
                attachment.url = publicPath;
                attachment.proxyUrl = publicPath;
            }
        }
    }
}

await loadDotEnv(".env.local");
await loadDotEnv(".env");

const limit = Math.min(
    Number.parseInt(argValue("--limit", "50"), 10) || 50,
    MAX_LIMIT,
);
const shouldDownloadMedia =
    process.argv.includes("--download-media") ||
    process.env.ASTRO_DOWNLOAD_MEDIA === "true";

if (!process.env.DISCORD_BOT_TOKEN || !process.env.DISCORD_ASTRO_CHANNEL_ID) {
    console.error(
        "Missing DISCORD_BOT_TOKEN or DISCORD_ASTRO_CHANNEL_ID. Add them to .env.local or the shell, then rerun.",
    );
    process.exit(1);
}

const messages = await fetchDiscordMessages(limit);
const items = messages.map((message) =>
    normalizeMessage(message, process.env.DISCORD_GUILD_ID),
);

if (shouldDownloadMedia) {
    await downloadMedia(items);
}

await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
await fs.writeFile(
    OUT_FILE,
    `${JSON.stringify(
        {
            ok: true,
            source: "cache",
            fetchedAt: new Date().toISOString(),
            generatedAt: new Date().toISOString(),
            stale: false,
            setupRequired: false,
            diagnostics: {
                message: shouldDownloadMedia
                    ? "Static Astro Sightings cache generated with local media."
                    : "Static Astro Sightings cache generated from Discord.",
            },
            items,
        },
        null,
        4,
    )}\n`,
);

console.log(`Wrote ${items.length} Astro Sightings to ${OUT_FILE}`);
