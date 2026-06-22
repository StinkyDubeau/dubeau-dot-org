import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CopyAddressButton({ address }) {
    if (!address) {
        return null;
    }

    return (
        <button
            className="flex min-h-12 w-full min-w-0 flex-wrap items-center justify-between gap-3 rounded-2xl bg-lighten-900 px-4 py-3 text-left font-header text-darken-800 shadow-md transition active:scale-[0.98] sm:w-fit"
            onClick={() => navigator.clipboard.writeText(address)}
        >
            <span className="text-sm font-semibold uppercase text-darken-500">
                Join
            </span>
            <span className="min-w-0 flex-1 break-all text-base font-semibold">
                {address}
            </span>
            <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-darken-800 text-lighten-900"
            >
                +
            </span>
        </button>
    );
}

function LinkButton({ href, to, children }) {
    const className =
        "inline-flex min-h-11 items-center justify-center rounded-2xl bg-darken-800 px-4 py-2 font-header text-sm font-semibold text-lighten-900 shadow-md transition hover:bg-darken-700 active:scale-[0.98]";

    if (to) {
        return (
            <Link
                to={to}
                className={className}
            >
                {children}
            </Link>
        );
    }

    return (
        <a
            href={href}
            className={className}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}

function NoticeCard({ title, body, tone = "neutral" }) {
    const toneClasses = {
        neutral: "bg-lighten-800 text-darken-800",
        warning: "bg-amber-100 text-amber-950",
        danger: "bg-red-100 text-red-950",
        good: "bg-emerald-100 text-emerald-950",
    };

    return (
        <article
            className={`max-w-full overflow-hidden rounded-2xl p-4 text-left shadow-sm ${toneClasses[tone]}`}
        >
            <p className="font-header text-sm font-semibold uppercase opacity-70">
                {title}
            </p>
            <div className="server-copy mt-2 font-header text-base leading-relaxed">
                {body}
            </div>
        </article>
    );
}

function Section({ title, eyebrow, children, actions }) {
    return (
        <section className="max-w-full overflow-hidden rounded-2xl bg-lighten-800 p-4 text-left shadow-sm sm:p-6">
            {eyebrow && (
                <p className="font-header text-sm font-semibold uppercase text-darken-500">
                    {eyebrow}
                </p>
            )}
            <h2 className="font-header text-2xl font-semibold text-darken-800">
                {title}
            </h2>
            <div className="server-copy mt-4 space-y-3 font-header text-base leading-relaxed text-darken-700 sm:text-lg">
                {children}
            </div>
            {actions && actions.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                    {actions.map((action) => (
                        <LinkButton
                            key={action.label}
                            href={action.href}
                            to={action.to}
                        >
                            {action.label}
                        </LinkButton>
                    ))}
                </div>
            )}
        </section>
    );
}

function FactGrid({ facts }) {
    if (!facts || facts.length === 0) {
        return null;
    }

    return (
        <section className="grid max-w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
                <div
                    key={`${fact.label}-${fact.value}`}
                    className="rounded-2xl bg-lighten-800 p-4 text-left shadow-sm"
                >
                    <p className="font-header text-sm font-semibold uppercase text-darken-500">
                        {fact.label}
                    </p>
                    <p className="mt-2 break-words font-header text-lg font-semibold text-darken-800">
                        {fact.value}
                    </p>
                </div>
            ))}
        </section>
    );
}

function PlayerCard({ player }) {
    return (
        <div className="mx-2 flex h-44 w-28 shrink-0 flex-col items-center justify-end rounded-2xl bg-lighten-900 px-2 py-3 shadow-sm">
            <img
                className="h-24 w-16 object-contain drop-shadow"
                src={`https://identicraft.js.org/bust/${player.uuid}`}
                alt={`${player.name} Minecraft skin`}
                loading="lazy"
            />
            <p className="mt-2 w-full truncate font-header text-sm font-semibold text-darken-800">
                {player.name}
            </p>
            <p className="w-full truncate font-header text-[0.65rem] text-darken-400">
                {player.uuid}
            </p>
        </div>
    );
}

function PlayerMarquee({ players }) {
    if (!players || players.length === 0) {
        return null;
    }

    return (
        <section
            id="players"
            className="rounded-2xl bg-lighten-800 py-4 text-left shadow-sm"
        >
            <div className="px-4 sm:px-6">
                <p className="font-header text-sm font-semibold uppercase text-darken-500">
                    Whitelist
                </p>
                <h2 className="font-header text-2xl font-semibold text-darken-800">
                    {players.length} players
                </h2>
            </div>
            <div className="mt-4 overflow-x-auto overscroll-x-contain px-2 pb-2">
                <div
                    className="flex w-max gap-2 pr-4"
                    aria-label="Whitelisted players"
                >
                    {players.map((player) => (
                        <PlayerCard
                            key={player.uuid}
                            player={player}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ServerPage({
    data,
    setData,
    title,
    subtitle,
    image,
    imageAlt,
    address,
    tags = [],
    notices = [],
    facts = [],
    sections = [],
    players = [],
    updated,
}) {
    useEffect(() => {
        setData({
            ...data,
            noNavbar: false,
            vignette: false,
            scrollToTop: true,
            noScroll: false,
        });
    }, []);

    return (
        <motion.main
            layoutId={image}
            className="server-page-shell mx-auto flex max-w-full flex-col gap-4 overflow-x-hidden py-4 sm:max-w-6xl sm:px-6"
        >
            <section className="relative isolate min-h-[68dvh] max-w-full overflow-hidden rounded-b-[2rem] rounded-t-2xl bg-darken-900 text-left shadow-xl md:min-h-[28rem]">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={image}
                    alt={imageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                <div className="relative z-10 flex min-h-[68dvh] flex-col justify-end gap-5 p-5 text-darken-900 md:min-h-[28rem] md:p-8">
                    <div>
                        <p className="font-header text-sm font-semibold uppercase tracking-normal text-darken-700">
                            dubeau.org servers
                        </p>
                        <h1 className="mt-2 max-w-3xl font-header text-5xl font-semibold leading-none sm:text-6xl">
                            {title}
                        </h1>
                        <p className="server-copy mt-3 font-header text-lg leading-relaxed text-darken-800 sm:max-w-2xl sm:text-2xl">
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-lighten-800 px-3 py-1 font-header text-sm font-semibold text-darken-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <CopyAddressButton address={address} />
                </div>
            </section>

            {notices.length > 0 && (
                <section className="grid gap-3 md:grid-cols-2">
                    {notices.map((notice) => (
                        <NoticeCard
                            key={notice.title}
                            {...notice}
                        />
                    ))}
                </section>
            )}

            <FactGrid facts={facts} />

            {sections.map((section) => (
                <Section
                    key={section.title}
                    {...section}
                />
            ))}

            <PlayerMarquee players={players} />

            {updated && (
                <p className="px-2 pb-6 text-center font-header text-sm text-darken-500">
                    Last updated {updated}
                </p>
            )}
        </motion.main>
    );
}
