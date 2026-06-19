import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

const defaultAstroApi =
    import.meta.env.VITE_ASTRO_API || "http://127.0.0.1:3000";

export default function Trackers(props) {
    // Function to input from JSON

    // Function to output to JSON
    //  Save JSON to DB

    const [data, setData] = useState(props.data);
    const [astroApi, setAstroApi] = useState(() =>
        localStorage.getItem("dubeau-astro-api") || defaultAstroApi,
    );
    const [adminToken, setAdminToken] = useState(() =>
        localStorage.getItem("dubeau-astro-admin-token") || "",
    );
    const [discordToken, setDiscordToken] = useState("");
    const [discordChannelId, setDiscordChannelId] = useState("");
    const [syncLimit, setSyncLimit] = useState("100");
    const [astroStatus, setAstroStatus] = useState(null);
    const [astroMessage, setAstroMessage] = useState("");
    const [astroBusy, setAstroBusy] = useState(false);

    // Apply page properties for <Frame />
    useEffect(() => {
        props.setData({
            ...props.data,
            vignette: true,
            scrollToTop: true,
            noScroll: false,
        });
    }, []);

    function getAstroHeaders() {
        return {
            "Content-Type": "application/json",
            ...(adminToken
                ? { Authorization: `Bearer ${adminToken}` }
                : {}),
        };
    }

    async function requestAstro(path, options = {}) {
        const response = await fetch(`${astroApi.replace(/\/$/, "")}${path}`, {
            ...options,
            headers: {
                ...getAstroHeaders(),
                ...options.headers,
            },
        });
        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(payload.error || `Request failed: ${response.status}`);
        }

        return payload;
    }

    async function loadAstroStatus() {
        setAstroBusy(true);
        setAstroMessage("");

        try {
            const [health, discord] = await Promise.all([
                requestAstro("/health", { headers: {} }),
                requestAstro("/admin/discord"),
            ]);

            setAstroStatus({ health, discord });
            localStorage.setItem("dubeau-astro-api", astroApi);
            localStorage.setItem("dubeau-astro-admin-token", adminToken);
            setAstroMessage("Astro server status loaded.");
        } catch (error) {
            setAstroMessage(error.message);
        } finally {
            setAstroBusy(false);
        }
    }

    async function saveDiscordConfig() {
        setAstroBusy(true);
        setAstroMessage("");

        try {
            const discord = await requestAstro("/admin/discord", {
                method: "POST",
                body: JSON.stringify({
                    discordToken,
                    discordChannelId,
                }),
            });
            const health = await requestAstro("/health", { headers: {} });

            setAstroStatus({ health, discord });
            setDiscordToken("");
            localStorage.setItem("dubeau-astro-api", astroApi);
            localStorage.setItem("dubeau-astro-admin-token", adminToken);
            setAstroMessage("Discord credentials saved locally on the server.");
        } catch (error) {
            setAstroMessage(error.message);
        } finally {
            setAstroBusy(false);
        }
    }

    async function syncAstroTimeline() {
        setAstroBusy(true);
        setAstroMessage("");

        try {
            const sync = await requestAstro("/astro/sync", {
                method: "POST",
                body: JSON.stringify({
                    maxMessages: Number(syncLimit),
                }),
            });
            const health = await requestAstro("/health", { headers: {} });

            setAstroStatus((status) => ({
                ...status,
                health,
                sync,
            }));
            setAstroMessage(
                `Synced ${sync.messages} Discord messages and ${sync.astros} image sightings.`,
            );
        } catch (error) {
            setAstroMessage(error.message);
        } finally {
            setAstroBusy(false);
        }
    }

    return (
        <div className="flex min-h-screen w-full flex-col justify-center pb-32">
            <motion.div
                layout
                className="lit-panel m-4 flex max-w-96 flex-col gap-2 rounded-2xl p-4 text-left font-header text-darken-800"
            >
                <h1 className="text-center text-3xl font-light">
                    ⚙️ Experiments
                </h1>
                <p className="">
                    Click{" "}
                    <span className="font-semibold text-green-500">
                        Activate Experimental
                    </span>{" "}
                    and return to the{" "}
                    <a
                        href="/fun"
                        className="font-semibold"
                    >
                        playground
                    </a>{" "}
                    page. You'll find several new links and features there, and
                    sitewide.
                </p>

                <div className="flex gap-2 text-darken-800">
                    <button
                        className="lit-control w-full rounded-xl p-2 text-darken-800 shadow-md"
                        onClick={() => {
                            setData({ ...data, Count: data.Count + 1 });
                        }}
                    >
                        Add to page data
                    </button>
                    <button
                        className="lit-control w-full rounded-xl p-2 text-darken-800 shadow-md"
                        onClick={() => {
                            props.setData({
                                ...props.data,
                                Count: props.data.Count + 1,
                            });
                        }}
                    >
                        Add to session data
                    </button>
                </div>
                <div className="flex justify-center gap-2 text-darken-800">
                    <button
                        className="lit-control w-full rounded-xl p-2 text-darken-800 shadow-md"
                        onClick={() => {
                            props.setData({
                                ...props.data,
                                loading: true,
                            });
                        }}
                    >
                        Start loading
                    </button>
                    <button
                        className="lit-control w-full rounded-xl p-2 text-darken-800 shadow-md"
                        onClick={() => {
                            props.setData({
                                ...props.data,
                                loading: false,
                            });
                        }}
                    >
                        Stop loading
                    </button>
                </div>
                <AnimatePresence mode="wait">
                    {props.data.loading && (
                        <motion.input
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="rounded-xl border-none bg-darken-50 p-2 shadow-inner-xl shadow-darken-100"
                            placeholder="Enter a loading message"
                            value={props.data.loading.text}
                            onChange={(e) => {
                                props.setData({
                                    ...props.data,
                                    loading: { text: e.target.value },
                                });
                            }}
                        />
                    )}
                </AnimatePresence>

                <div className="flex justify-center gap-2 text-darken-800">
                    <button
                        className="w-full rounded-xl bg-green-500 p-2 font-semibold text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-green-400 hover:text-darken-700 hover:shadow-lg"
                        onClick={() => {
                            props.setData({
                                ...props.data,
                                experimental: true,
                            });
                        }}
                    >
                        Activate Experimental
                    </button>
                    <button
                        className="w-full rounded-xl bg-red-500 p-2 font-bold text-lighten-800 shadow-md transition-all hover:scale-105 hover:bg-red-400 hover:text-lighten-900 hover:shadow-lg"
                        onClick={() => {
                            props.setData({
                                ...props.data,
                                experimental: false,
                            });
                        }}
                    >
                        Deactivate Experimental
                    </button>
                </div>
                <p>
                    You can also press the{" "}
                    <span className="rounded bg-darken-50">`</span> key to
                    toggle experimental features.
                </p>
                <div className="flex flex-col gap-2 rounded-xl bg-darken-50 p-4">
                    <p className="m-auto font-header">Site flags and data</p>
                    <div>
                        <p className="text-nowrap font-header">Splat:</p>
                        <p className="ml-4 text-nowrap font-header">
                            {useParams()[1] ? useParams()[1] : "None"}
                        </p>
                    </div>

                    <ul className="">
                        Local scope:
                        <p className="text-sm">
                            Click on an entry to delete it.
                        </p>
                        {data
                            ? Object.keys(data).map((key) => (
                                  <li
                                      className="ml-4"
                                      onClick={() => {
                                          const reducedData = data;
                                          delete reducedData[key];
                                          props.setData(reducedData);
                                      }}
                                  >
                                      {key.toString()}: {data[key].toString()}
                                  </li>
                              ))
                            : "None"}
                    </ul>
                </div>
            </motion.div>

            {props.data.experimental && (
                <motion.div
                    layout
                    className="lit-panel m-4 flex max-w-96 flex-col gap-3 rounded-2xl p-4 text-left font-header text-darken-800"
                >
                    <h2 className="text-center text-2xl font-light">
                        🔭 Astro Sightings Admin
                    </h2>
                    <p className="text-sm">
                        Saves Discord bot credentials to the local
                        dubeau-dot-ai server. The Discord token is not stored in
                        this browser after submit.
                    </p>

                    <label className="flex flex-col gap-1">
                        <span>Astro API URL</span>
                        <input
                            className="lit-input rounded-xl px-3 py-2"
                            value={astroApi}
                            onChange={(event) => setAstroApi(event.target.value)}
                            placeholder="http://127.0.0.1:3000"
                        />
                    </label>

                    <label className="flex flex-col gap-1">
                        <span>Admin token</span>
                        <input
                            className="lit-input rounded-xl px-3 py-2"
                            type="password"
                            value={adminToken}
                            onChange={(event) =>
                                setAdminToken(event.target.value)
                            }
                            placeholder="ADMIN_TOKEN from dubeau-dot-ai"
                        />
                    </label>

                    <div className="grid gap-2 rounded-2xl border border-darken-50/20 p-3">
                        <label className="flex flex-col gap-1">
                            <span>Discord bot token</span>
                            <input
                                className="lit-input rounded-xl px-3 py-2"
                                type="password"
                                value={discordToken}
                                onChange={(event) =>
                                    setDiscordToken(event.target.value)
                                }
                                placeholder="Bot token"
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <span>Discord channel ID</span>
                            <input
                                className="lit-input rounded-xl px-3 py-2"
                                value={discordChannelId}
                                onChange={(event) =>
                                    setDiscordChannelId(event.target.value)
                                }
                                placeholder="Right click channel → Copy Channel ID"
                            />
                        </label>

                        <button
                            className="lit-control rounded-xl px-3 py-2 font-bold"
                            disabled={
                                astroBusy || !discordToken || !discordChannelId
                            }
                            onClick={saveDiscordConfig}
                        >
                            Save Discord config locally
                        </button>
                    </div>

                    <div className="grid gap-2 rounded-2xl border border-darken-50/20 p-3">
                        <label className="flex flex-col gap-1">
                            <span>Sync message limit</span>
                            <input
                                className="lit-input rounded-xl px-3 py-2"
                                value={syncLimit}
                                onChange={(event) =>
                                    setSyncLimit(event.target.value)
                                }
                                placeholder="100 now, 0 for full channel"
                            />
                        </label>

                        <div className="flex gap-2">
                            <button
                                className="lit-control flex-1 rounded-xl px-3 py-2"
                                disabled={astroBusy}
                                onClick={loadAstroStatus}
                            >
                                Check status
                            </button>
                            <button
                                className="lit-control flex-1 rounded-xl px-3 py-2 font-bold"
                                disabled={astroBusy}
                                onClick={syncAstroTimeline}
                            >
                                Sync timeline
                            </button>
                        </div>
                    </div>

                    {astroMessage && (
                        <p className="rounded-xl bg-darken-50/20 p-2 text-sm">
                            {astroBusy ? "Working… " : ""}
                            {astroMessage}
                        </p>
                    )}

                    {astroStatus && (
                        <pre className="max-h-72 overflow-auto rounded-xl bg-darken-50/20 p-2 text-xs">
                            {JSON.stringify(astroStatus, null, 2)}
                        </pre>
                    )}
                </motion.div>
            )}
        </div>
    );
}
