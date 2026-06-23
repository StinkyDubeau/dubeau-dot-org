/* eslint-env node */

import fs from "node:fs/promises";
import path from "node:path";

const DISCORD_API_BASE = "https://discord.com/api/v10";
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;
const CACHE_TTL_MS = 60 * 1000;
const STALE_TTL_MS = 5 * 60 * 1000;
const STATIC_CACHE_PATH = path.join(
    process.cwd(),
    "public",
    "data",
    "astro-sightings.json",
);

let memoryCache = null;

const fixtureMessages = [
    {
        id: "1260000000000000001",
        channel_id: "112233445566778899",
        guild_id: "998877665544332211",
        timestamp: "2026-06-21T03:42:00.000Z",
        edited_timestamp: null,
        content: "Clouds finally cleared for the crescent moon and Venus.",
        author: {
            id: "100000000000000001",
            username: "StinkyDubeau",
            global_name: "Jake",
            avatar: null,
            bot: false,
        },
        attachments: [
            {
                id: "a1",
                filename: "moon-venus.jpg",
                content_type: "image/jpeg",
                url: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=1200&q=80",
                proxy_url: null,
                width: 1200,
                height: 900,
                size: 382000,
            },
        ],
        embeds: [],
        reactions: [{ emoji: { name: "moon" }, count: 7 }],
    },
    {
        id: "1260000000000000002",
        channel_id: "112233445566778899",
        guild_id: "998877665544332211",
        timestamp: "2026-06-18T05:19:00.000Z",
        edited_timestamp: null,
        content:
            "Saturn was low but sharp through binoculars. Phone camera did not love it, but the view was worth posting.",
        author: {
            id: "100000000000000002",
            username: "cheekysaucy",
            global_name: null,
            avatar: null,
            bot: false,
        },
        attachments: [
            {
                id: "a2",
                filename: "saturn-sky.jpg",
                content_type: "image/jpeg",
                url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
                proxy_url: null,
                width: 1200,
                height: 800,
                size: 410000,
            },
            {
                id: "a3",
                filename: "yard-scope.jpg",
                content_type: "image/jpeg",
                url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
                proxy_url: null,
                width: 1200,
                height: 800,
                size: 420000,
            },
        ],
        embeds: [],
        reactions: [{ emoji: { name: "saturn" }, count: 4 }],
    },
    {
        id: "1260000000000000003",
        channel_id: "112233445566778899",
        guild_id: "998877665544332211",
        timestamp: "2026-06-12T02:05:00.000Z",
        edited_timestamp: null,
        content:
            "No photo this time. Just a bright meteor heading east while walking back from the store.",
        author: {
            id: "100000000000000003",
            username: "Prezedent07",
            global_name: "Prezedent07",
            avatar: null,
            bot: false,
        },
        attachments: [],
        embeds: [],
        reactions: [{ emoji: { name: "sparkles" }, count: 3 }],
    },
];

function sendJson(response, status, body, headers = {}) {
    response.status(status);
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    Object.entries(headers).forEach(([key, value]) => {
        response.setHeader(key, value);
    });
    response.send(JSON.stringify(body));
}

function parseLimit(value) {
    if (!value) return DEFAULT_LIMIT;
    const limit = Number(value);
    if (!Number.isInteger(limit) || limit < 1) {
        return null;
    }
    return Math.min(limit, MAX_LIMIT);
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

function avatarUrl(author) {
    if (!author?.id || !author?.avatar) return null;
    const extension = author.avatar.startsWith("a_") ? "gif" : "png";
    return `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.${extension}?size=128`;
}

function normalizeReaction(reaction) {
    const emoji = reaction?.emoji?.name || reaction?.emoji?.id || "";
    return {
        emoji,
        count: Number(reaction?.count || 0),
    };
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
        reactions: (message.reactions || []).map(normalizeReaction),
        media: buildMedia(attachments, embeds),
    };
}

function fixtureResponse(limit, diagnostic) {
    return {
        ok: true,
        source: "fixture",
        fetchedAt: new Date().toISOString(),
        stale: false,
        setupRequired: true,
        diagnostics: {
            message:
                diagnostic ||
                "Using sample Astro Sightings because Discord env vars are not configured.",
        },
        items: fixtureMessages
            .slice(0, limit)
            .map((message) =>
                normalizeMessage(message, process.env.DISCORD_GUILD_ID),
            ),
    };
}

async function staticCacheResponse(limit) {
    const file = await fs.readFile(STATIC_CACHE_PATH, "utf8");
    const parsed = JSON.parse(file);
    const items = Array.isArray(parsed.items) ? parsed.items : [];

    return {
        ok: true,
        source: "cache",
        fetchedAt: parsed.fetchedAt || null,
        generatedAt: parsed.generatedAt || null,
        stale: Boolean(parsed.stale),
        setupRequired: Boolean(parsed.setupRequired),
        diagnostics: parsed.diagnostics || {
            message: "Showing the cached Astro Sightings snapshot.",
        },
        items: items.slice(0, limit),
    };
}

async function sendStaticCache(response, limit, status = 200) {
    const body = await staticCacheResponse(limit);
    sendJson(response, status, body, {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=3600",
    });
}

function hasDiscordConfig() {
    return Boolean(
        process.env.DISCORD_BOT_TOKEN && process.env.DISCORD_ASTRO_CHANNEL_ID,
    );
}

async function fetchDiscordMessages(limit) {
    const channelId = process.env.DISCORD_ASTRO_CHANNEL_ID;
    const url = new URL(`${DISCORD_API_BASE}/channels/${channelId}/messages`);
    url.searchParams.set("limit", String(limit));

    const response = await fetch(url, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
    });

    if (!response.ok) {
        const retryAfter = response.headers.get("retry-after");
        let detail = null;
        try {
            detail = await response.json();
        } catch {
            detail = null;
        }

        const error = new Error("Discord API request failed");
        error.status = response.status;
        error.retryAfter = retryAfter;
        error.discordMessage = detail?.message || null;
        throw error;
    }

    return response.json();
}

function cacheIsFresh() {
    return memoryCache && Date.now() - memoryCache.timestamp < CACHE_TTL_MS;
}

function cacheIsUsableStale() {
    return memoryCache && Date.now() - memoryCache.timestamp < STALE_TTL_MS;
}

export default async function handler(request, response) {
    if (request.method !== "GET") {
        response.setHeader("Allow", "GET");
        sendJson(response, 405, {
            ok: false,
            error: "method_not_allowed",
            message: "Only GET is supported.",
        });
        return;
    }

    const limit = parseLimit(request.query?.limit);
    if (!limit) {
        sendJson(response, 400, {
            ok: false,
            error: "invalid_limit",
            message: `limit must be an integer from 1 to ${MAX_LIMIT}.`,
        });
        return;
    }

    const requestedSource = request.query?.source || "auto";
    const allowFixture =
        process.env.ASTRO_ALLOW_FIXTURE === "true" || !hasDiscordConfig();

    if (requestedSource === "cache") {
        try {
            await sendStaticCache(response, limit);
        } catch {
            sendJson(response, 404, {
                ok: false,
                error: "cache_missing",
                message: "No static Astro Sightings cache is available.",
            });
        }
        return;
    }

    if (requestedSource === "fixture") {
        if (!allowFixture) {
            sendJson(response, 403, {
                ok: false,
                error: "fixture_disabled",
                message: "Fixture mode is disabled for this deployment.",
            });
            return;
        }

        sendJson(response, 200, fixtureResponse(limit), {
            "Cache-Control": "no-store",
        });
        return;
    }

    if (!["auto", "discord"].includes(requestedSource)) {
        sendJson(response, 400, {
            ok: false,
            error: "invalid_source",
            message: "source must be auto, discord, cache, or fixture.",
        });
        return;
    }

    if (!hasDiscordConfig()) {
        if (requestedSource === "discord") {
            sendJson(response, 500, {
                ok: false,
                error: "missing_config",
                message:
                    "Discord env vars are missing. Configure DISCORD_BOT_TOKEN and DISCORD_ASTRO_CHANNEL_ID.",
            });
            return;
        }

        try {
            await sendStaticCache(response, limit);
        } catch {
            sendJson(response, 200, fixtureResponse(limit), {
                "Cache-Control": "no-store",
            });
        }
        return;
    }

    if (cacheIsFresh() && memoryCache.limit >= limit) {
        sendJson(
            response,
            200,
            {
                ...memoryCache.body,
                items: memoryCache.body.items.slice(0, limit),
                stale: false,
            },
            {
                "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
            },
        );
        return;
    }

    try {
        const messages = await fetchDiscordMessages(limit);
        const items = messages.map((message) =>
            normalizeMessage(message, process.env.DISCORD_GUILD_ID),
        );
        const body = {
            ok: true,
            source: "discord",
            fetchedAt: new Date().toISOString(),
            stale: false,
            setupRequired: false,
            diagnostics:
                items.length > 0 &&
                items.every(
                    (item) =>
                        !item.content &&
                        item.attachments.length === 0 &&
                        item.embeds.length === 0,
                )
                    ? {
                          message:
                              "Discord returned messages without content, attachments, or embeds. The bot may need Message Content intent enabled.",
                      }
                    : undefined,
            items,
        };

        memoryCache = {
            timestamp: Date.now(),
            limit,
            body,
        };

        sendJson(response, 200, body, {
            "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
        });
    } catch (error) {
        if (cacheIsUsableStale() && memoryCache.limit >= limit) {
            sendJson(
                response,
                200,
                {
                    ...memoryCache.body,
                    items: memoryCache.body.items.slice(0, limit),
                    stale: true,
                    diagnostics: {
                        message:
                            "Showing cached sightings because Discord is temporarily unavailable.",
                    },
                },
                {
                    "Cache-Control": "no-store",
                },
            );
            return;
        }

        if (requestedSource !== "discord") {
            try {
                await sendStaticCache(response, limit);
                return;
            } catch {
                // Fall through to the sanitized Discord error below.
            }
        }

        const isRateLimit = error.status === 429;
        sendJson(
            response,
            isRateLimit ? 429 : 502,
            {
                ok: false,
                error: isRateLimit ? "discord_rate_limited" : "discord_error",
                message:
                    error.status === 401
                        ? "Discord rejected the bot token."
                        : error.status === 403
                          ? "The bot cannot read this Discord channel."
                          : error.status === 404
                            ? "Discord channel was not found for this bot."
                            : isRateLimit
                              ? "Discord rate limited this request."
                              : "Discord could not be reached.",
                retryAfter: error.retryAfter || null,
                discordStatus: error.status || null,
            },
            {
                "Cache-Control": "no-store",
            },
        );
    }
}
