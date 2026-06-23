/* eslint-disable react/prop-types */

import { useCallback, useEffect, useMemo, useState } from "react";

const DEFAULT_LIMIT = 50;
const SOURCE_LABELS = {
    cache: "cached",
    auto: "api auto",
    discord: "discord",
    fixture: "fixture",
};

function formatTime(value) {
    if (!value) return "unknown time";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "unknown time";

    return new Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    }).format(date);
}

function initials(name = "?") {
    return name
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

function sourceUrl(source, limit) {
    if (source === "cache") {
        return "/data/astro-sightings.json";
    }

    const params = new URLSearchParams({
        source,
        limit: String(limit),
    });
    return `/api/astros?${params.toString()}`;
}

function normalizeResponse(data, source, limit) {
    const items = Array.isArray(data.items) ? data.items.slice(0, limit) : [];
    return {
        ok: Boolean(data.ok),
        source: data.source || source,
        fetchedAt: data.fetchedAt || data.generatedAt || null,
        generatedAt: data.generatedAt || null,
        stale: Boolean(data.stale),
        setupRequired: Boolean(data.setupRequired),
        diagnostics: data.diagnostics || null,
        items,
    };
}

function MediaPreview({ item, onOpen }) {
    const media = item.media || [];

    if (media.length === 0) {
        return (
            <button
                type="button"
                onClick={onOpen}
                className="flex aspect-[4/3] w-full max-w-full flex-col justify-end rounded-2xl bg-lighten-900 p-4 text-left shadow-inner"
            >
                <p className="font-header text-sm font-semibold uppercase text-darken-400">
                    text sighting
                </p>
                <p className="mt-2 line-clamp-4 break-words font-header text-lg leading-snug text-darken-800">
                    {item.content || "No message text available."}
                </p>
            </button>
        );
    }

    const primary = media[0];
    const extraCount = media.length - 1;

    return (
        <button
            type="button"
            onClick={onOpen}
            className="group relative block aspect-[4/3] w-full max-w-full overflow-hidden rounded-2xl bg-lighten-900 text-left shadow-inner"
        >
            {primary.kind === "video" ? (
                <video
                    src={primary.url}
                    className="h-full w-full object-cover"
                    preload="metadata"
                    muted
                    playsInline
                />
            ) : (
                <img
                    src={primary.previewUrl || primary.url}
                    alt={primary.alt || item.content || "Astro sighting"}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                />
            )}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="rounded-full bg-black/70 px-2 py-1 font-header text-xs font-semibold uppercase text-white">
                    {primary.kind}
                </span>
                {extraCount > 0 && (
                    <span className="rounded-full bg-black/70 px-2 py-1 font-header text-xs font-semibold text-white">
                        +{extraCount}
                    </span>
                )}
            </div>
        </button>
    );
}

function AuthorMark({ author }) {
    if (author?.avatarUrl) {
        return (
            <img
                src={author.avatarUrl}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
            />
        );
    }

    return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-darken-800 font-header text-sm font-semibold text-lighten-900">
            {initials(author?.displayName || author?.name)}
        </div>
    );
}

function SightingCard({ item, onOpen }) {
    const authorName = item.author?.displayName || item.author?.name || "Observer";
    const reactions = (item.reactions || []).filter((reaction) => reaction.count);

    return (
        <article className="min-w-0 max-w-full overflow-hidden rounded-2xl bg-lighten-800 p-3 text-left shadow-sm">
            <MediaPreview
                item={item}
                onOpen={onOpen}
            />

            <div className="mt-3 flex gap-3">
                <AuthorMark author={item.author} />
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                        <h2 className="truncate font-header text-base font-semibold text-darken-800">
                            {authorName}
                        </h2>
                        <time className="shrink-0 font-header text-xs text-darken-500">
                            {formatTime(item.createdAt)}
                        </time>
                    </div>
                    {item.content && (
                        <p className="mt-2 line-clamp-3 break-words font-header text-sm leading-relaxed text-darken-700">
                            {item.content}
                        </p>
                    )}
                    <div className="mt-3 flex flex-wrap items-center gap-2 font-header text-xs text-darken-500">
                        {item.media?.length > 0 && (
                            <span>{item.media.length} media</span>
                        )}
                        {item.attachments?.length > item.media?.length && (
                            <span>{item.attachments.length} attachments</span>
                        )}
                        {reactions.slice(0, 3).map((reaction) => (
                            <span
                                key={`${item.id}-${reaction.emoji}`}
                                className="rounded-full bg-lighten-900 px-2 py-1"
                            >
                                {reaction.emoji} {reaction.count}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

function AdminPanel({ source, setSource, limit, setLimit, onLoad, loading }) {
    return (
        <section className="max-w-full rounded-2xl border border-darken-100 bg-lighten-800 p-3 text-left shadow-sm">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="font-header text-xs font-semibold uppercase text-darken-500">
                        admin testing
                    </p>
                    <p className="font-header text-sm text-darken-700">
                        Source controls only. Tokens and channel IDs stay server-side.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => onLoad(source)}
                    disabled={loading}
                    className="min-h-10 rounded-xl bg-darken-800 px-4 font-header text-sm font-semibold text-lighten-900 disabled:opacity-60"
                >
                    {loading ? "Loading" : "Fetch"}
                </button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
                <label className="font-header text-sm text-darken-700">
                    <span className="mb-1 block text-xs font-semibold uppercase text-darken-500">
                        source
                    </span>
                    <select
                        value={source}
                        onChange={(event) => setSource(event.target.value)}
                        className="w-full rounded-xl border-none bg-lighten-900 font-header text-darken-800"
                    >
                        <option value="cache">cache</option>
                        <option value="auto">api auto</option>
                        <option value="discord">discord</option>
                        <option value="fixture">fixture</option>
                    </select>
                </label>
                <label className="font-header text-sm text-darken-700">
                    <span className="mb-1 block text-xs font-semibold uppercase text-darken-500">
                        limit
                    </span>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={limit}
                        onChange={(event) => setLimit(event.target.value)}
                        className="w-full rounded-xl border-none bg-lighten-900 font-header text-darken-800"
                    />
                </label>
            </div>
        </section>
    );
}

function DetailModal({ item, onClose }) {
    const [index, setIndex] = useState(0);
    const media = item?.media || [];
    const selected = media[index];
    const authorName = item?.author?.displayName || item?.author?.name || "Observer";

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
            }
            if (event.key === "ArrowRight" && media.length > 1) {
                setIndex((current) => (current + 1) % media.length);
            }
            if (event.key === "ArrowLeft" && media.length > 1) {
                setIndex((current) =>
                    current === 0 ? media.length - 1 : current - 1,
                );
            }
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [media.length, onClose]);

    if (!item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end bg-black/80 p-2 backdrop-blur-sm sm:items-center sm:p-6">
            <div className="mx-auto flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-lighten-900 shadow-2xl sm:grid sm:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)]">
                <div className="min-h-0 bg-black">
                    {selected ? (
                        selected.kind === "video" ? (
                            <video
                                src={selected.url}
                                controls
                                className="max-h-[60dvh] w-full object-contain sm:max-h-[94dvh]"
                            />
                        ) : (
                            <img
                                src={selected.url}
                                alt={selected.alt || item.content || "Astro sighting"}
                                className="max-h-[60dvh] w-full object-contain sm:max-h-[94dvh]"
                            />
                        )
                    ) : (
                        <div className="flex min-h-72 items-center justify-center p-6">
                            <p className="max-w-sm text-center font-header text-lg text-white">
                                {item.content || "No media available."}
                            </p>
                        </div>
                    )}
                </div>

                <div className="min-h-0 overflow-y-auto p-4">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 gap-3">
                            <AuthorMark author={item.author} />
                            <div className="min-w-0">
                                <p className="truncate font-header text-lg font-semibold text-darken-800">
                                    {authorName}
                                </p>
                                <time className="font-header text-sm text-darken-500">
                                    {formatTime(item.createdAt)}
                                </time>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl bg-lighten-800 px-3 py-2 font-header text-sm font-semibold text-darken-800"
                        >
                            Close
                        </button>
                    </div>

                    {item.content && (
                        <p className="mt-4 whitespace-pre-wrap font-header text-base leading-relaxed text-darken-800">
                            {item.content}
                        </p>
                    )}

                    {media.length > 1 && (
                        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                            {media.map((entry, mediaIndex) => (
                                <button
                                    type="button"
                                    key={`${item.id}-${entry.url}-${mediaIndex}`}
                                    onClick={() => setIndex(mediaIndex)}
                                    className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border ${
                                        index === mediaIndex
                                            ? "border-darken-800"
                                            : "border-transparent"
                                    }`}
                                >
                                    {entry.kind === "video" ? (
                                        <div className="flex h-full w-full items-center justify-center bg-black font-header text-xs text-white">
                                            video
                                        </div>
                                    ) : (
                                        <img
                                            src={entry.previewUrl || entry.url}
                                            alt=""
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}

                    {item.jumpUrl && (
                        <a
                            href={item.jumpUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex min-h-10 items-center rounded-xl bg-darken-800 px-4 font-header text-sm font-semibold text-lighten-900"
                        >
                            Open in Discord
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Astros({ setData }) {
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState(null);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [source, setSource] = useState("cache");
    const [limit, setLimit] = useState(String(DEFAULT_LIMIT));
    const [showAdmin, setShowAdmin] = useState(false);

    const parsedLimit = useMemo(() => {
        const value = Number(limit);
        return Number.isInteger(value) && value > 0 ? Math.min(value, 100) : 50;
    }, [limit]);

    const loadSightings = useCallback(async (nextSource = "cache") => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(sourceUrl(nextSource, parsedLimit), {
                headers: {
                    Accept: "application/json",
                },
            });
            const data = await response.json();

            if (!response.ok || data.ok === false) {
                throw new Error(data.message || "Astro Sightings failed to load.");
            }

            const normalized = normalizeResponse(data, nextSource, parsedLimit);
            setItems(normalized.items);
            setMeta(normalized);
        } catch (loadError) {
            setError(loadError.message);
        } finally {
            setLoading(false);
        }
    }, [parsedLimit]);

    useEffect(() => {
        setData &&
            setData((currentData) => ({
                ...currentData,
                noNavbar: false,
                vignette: false,
                noScroll: false,
                scrollToTop: true,
            }));
    }, [setData]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const adminEnabled =
            params.get("admin") === "1" ||
            window.localStorage.getItem("astro-admin") === "true";

        setShowAdmin(adminEnabled);
        if (adminEnabled) {
            window.localStorage.setItem("astro-admin", "true");
        }

        loadSightings("cache");
    }, [loadSightings]);

    const sourceLabel = SOURCE_LABELS[meta?.source] || meta?.source || "cache";

    return (
        <main className="mx-3 box-border flex w-[calc(100vw-1.5rem)] max-w-[22rem] flex-col gap-4 overflow-x-hidden py-4 text-left sm:mx-auto sm:max-w-3xl">
            <header className="sticky top-0 z-20 bg-lighten-800/95 py-3 backdrop-blur-md md:top-20">
                <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                        <h1 className="truncate font-header text-2xl font-semibold tracking-normal text-darken-800 sm:text-3xl">
                            Astro Sightings
                        </h1>
                        <p className="font-header text-sm text-darken-500">
                            {loading
                                ? "Loading"
                                : `${items.length} posts from ${sourceLabel}`}
                            {meta?.fetchedAt ? ` - ${formatTime(meta.fetchedAt)}` : ""}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => loadSightings(showAdmin ? source : "cache")}
                        disabled={loading}
                        className="min-h-10 shrink-0 rounded-xl bg-darken-800 px-4 font-header text-sm font-semibold text-lighten-900 shadow-sm disabled:opacity-60"
                    >
                        Refresh
                    </button>
                </div>
            </header>

            {(meta?.diagnostics?.message || error) && (
                <section
                    className={`rounded-2xl p-4 font-header text-sm leading-relaxed shadow-sm ${
                        error
                            ? "bg-red-100 text-red-950"
                            : "bg-lighten-800 text-darken-700"
                    }`}
                >
                    {error || meta.diagnostics.message}
                </section>
            )}

            {showAdmin && (
                <AdminPanel
                    source={source}
                    setSource={setSource}
                    limit={limit}
                    setLimit={setLimit}
                    onLoad={loadSightings}
                    loading={loading}
                />
            )}

            {loading && items.length === 0 ? (
                <section className="grid gap-4">
                    {[0, 1, 2].map((item) => (
                        <div
                            key={item}
                            className="h-80 animate-pulse rounded-2xl bg-lighten-800"
                        />
                    ))}
                </section>
            ) : items.length > 0 ? (
                <section className="grid gap-4 pb-6">
                    {items.map((item) => (
                        <SightingCard
                            key={item.id}
                            item={item}
                            onOpen={() => setSelected(item)}
                        />
                    ))}
                </section>
            ) : (
                <section className="rounded-2xl bg-lighten-800 p-6 text-center font-header text-darken-700">
                    No sightings are available yet.
                </section>
            )}

            {selected && (
                <DetailModal
                    item={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </main>
    );
}
