import { useCallback, useEffect, useRef, useState } from "react";

const MAX_TILT = 35;
const STORAGE_KEY = "dubeau-motion-lighting";
const THEME_STORAGE_KEY = "dubeau-color-mode";
const SPRING_STIFFNESS = 0.16;
const SPRING_DAMPING = 0.62;
const NOISE_SCALE = 0.006;
const LIGHT_POSITION_RANGE = 46;
const PANEL_LIGHT_POSITION_RANGE = 40;

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function getScreenAngle() {
    return window.screen?.orientation?.angle ?? window.orientation ?? 0;
}

function rotateTilt(beta, gamma) {
    const angle = getScreenAngle();

    if (angle === 90) return { x: beta, y: -gamma };
    if (angle === -90 || angle === 270) return { x: -beta, y: gamma };
    if (angle === 180) return { x: -gamma, y: -beta };

    return { x: gamma, y: beta };
}

function getSavedPreference() {
    try {
        return window.localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

function savePreference(preference) {
    try {
        window.localStorage.setItem(STORAGE_KEY, preference);
    } catch {
        // Lighting still works for this visit when storage is unavailable.
    }
}

function saveTheme(theme) {
    try {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // The theme still applies for the current page view.
    }
}

export default function MotionLighting({
    colorMode = "light",
    reduceMotion = false,
}) {
    const frameRef = useRef(null);
    const springFrameRef = useRef(null);
    const orientationActiveRef = useRef(false);
    const lightRef = useRef({ x: -0.65, y: -0.65 });
    const targetRef = useRef({ x: -0.65, y: -0.65 });
    const velocityRef = useRef({ x: 0, y: 0 });
    const noiseRef = useRef({
        xPhase: Math.random() * Math.PI * 2,
        yPhase: Math.random() * Math.PI * 2,
    });
    const [preference, setPreference] = useState(getSavedPreference);
    const [permissionRequired, setPermissionRequired] = useState(false);
    const [motionEnabled, setMotionEnabled] = useState(false);

    const applyLightDirection = useCallback((lightX, lightY) => {
        const root = document.documentElement;

        root.style.setProperty("--light-x", lightX.toFixed(3));
        root.style.setProperty("--light-y", lightY.toFixed(3));
        root.style.setProperty("--light-offset-x", `${lightX * 3}px`);
        root.style.setProperty("--light-offset-y", `${lightY * 3}px`);
        root.style.setProperty("--shadow-offset-x", `${lightX * -4}px`);
        root.style.setProperty("--shadow-offset-y", `${lightY * -4}px`);
        root.style.setProperty(
            "--light-position-x",
            `${50 + lightX * LIGHT_POSITION_RANGE}%`,
        );
        root.style.setProperty(
            "--light-position-y",
            `${50 + lightY * LIGHT_POSITION_RANGE}%`,
        );
        root.style.setProperty(
            "--panel-light-position-x",
            `${50 - lightX * PANEL_LIGHT_POSITION_RANGE}%`,
        );
        root.style.setProperty(
            "--panel-light-position-y",
            `${50 - lightY * PANEL_LIGHT_POSITION_RANGE}%`,
        );
        root.style.setProperty(
            "--light-angle",
            `${Math.atan2(lightY, lightX) * (180 / Math.PI) + 90}deg`,
        );
    }, []);

    const setLightDirection = useCallback((x, y) => {
        const normalizedX = clamp(x / MAX_TILT, -1, 1);
        const normalizedY = clamp(y / MAX_TILT, -1, 1);

        targetRef.current = {
            x: normalizedX,
            y: normalizedY,
        };
    }, []);

    useEffect(() => {
        if (reduceMotion) {
            cancelAnimationFrame(springFrameRef.current);
            targetRef.current = { x: -0.35, y: -0.35 };
            lightRef.current = { x: -0.35, y: -0.35 };
            velocityRef.current = { x: 0, y: 0 };
            applyLightDirection(-0.35, -0.35);
            return undefined;
        }

        const tick = (time) => {
            const target = targetRef.current;
            const light = lightRef.current;
            const velocity = velocityRef.current;
            const noise = noiseRef.current;
            const noiseX = Math.sin(time * 0.0008 + noise.xPhase) * NOISE_SCALE;
            const noiseY = Math.cos(time * 0.0007 + noise.yPhase) * NOISE_SCALE;

            velocity.x =
                (velocity.x +
                    (target.x + noiseX - light.x) * SPRING_STIFFNESS) *
                SPRING_DAMPING;
            velocity.y =
                (velocity.y +
                    (target.y + noiseY - light.y) * SPRING_STIFFNESS) *
                SPRING_DAMPING;

            light.x = clamp(light.x + velocity.x, -1, 1);
            light.y = clamp(light.y + velocity.y, -1, 1);
            applyLightDirection(light.x, light.y);
            springFrameRef.current = requestAnimationFrame(tick);
        };

        springFrameRef.current = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(springFrameRef.current);
    }, [applyLightDirection, reduceMotion]);

    useEffect(() => {
        const theme = colorMode === "light" ? "light" : "dark";

        document.documentElement.dataset.colorMode = theme;
        document.documentElement.dataset.theme = theme;
        document.body.dataset.colorMode = theme;
        saveTheme(theme);
    }, [colorMode]);

    useEffect(() => {
        document.documentElement.dataset.reduceMotion = String(reduceMotion);
    }, [reduceMotion]);

    const handleOrientation = useCallback(
        ({ beta, gamma }) => {
            if (beta == null || gamma == null) return;

            orientationActiveRef.current = true;
            cancelAnimationFrame(frameRef.current);
            frameRef.current = requestAnimationFrame(() => {
                const tilt = rotateTilt(beta, gamma);
                setLightDirection(tilt.x, tilt.y);
            });
        },
        [setLightDirection],
    );

    useEffect(() => {
        const supportsOrientation = "DeviceOrientationEvent" in window;
        const requiresPermission =
            supportsOrientation &&
            typeof DeviceOrientationEvent.requestPermission === "function";

        setPermissionRequired(requiresPermission);

        if (
            supportsOrientation &&
            !requiresPermission &&
            preference !== "pointer"
        ) {
            setMotionEnabled(true);
        }
    }, [preference]);

    useEffect(() => {
        if (reduceMotion) {
            return undefined;
        }

        const handlePointerMove = ({ clientX, clientY }) => {
            if (orientationActiveRef.current && motionEnabled) return;

            const x = ((clientX / window.innerWidth) * 2 - 1) * MAX_TILT;
            const y = ((clientY / window.innerHeight) * 2 - 1) * MAX_TILT;
            setLightDirection(x, y);
        };

        if (motionEnabled) {
            window.addEventListener("deviceorientation", handleOrientation);
        }
        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            cancelAnimationFrame(frameRef.current);
            window.removeEventListener("deviceorientation", handleOrientation);
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, [handleOrientation, motionEnabled, reduceMotion, setLightDirection]);

    const enableMotion = async () => {
        try {
            if (permissionRequired) {
                const permission =
                    await DeviceOrientationEvent.requestPermission();
                if (permission !== "granted") {
                    savePreference("pointer");
                    setPreference("pointer");
                    return;
                }
            }

            savePreference("motion");
            setPreference("motion");
            setMotionEnabled(true);
        } catch (error) {
            console.warn("Motion lighting permission was unavailable.", error);
            savePreference("pointer");
            setPreference("pointer");
        }
    };

    const usePointer = () => {
        orientationActiveRef.current = false;
        savePreference("pointer");
        setPreference("pointer");
        setMotionEnabled(false);
    };

    const showPrompt =
        permissionRequired && preference !== "pointer" && !motionEnabled;

    return (
        <>
            {showPrompt && (
                <aside
                    className="motion-prompt"
                    aria-live="polite"
                >
                    <div>
                        <p className="font-header text-base font-semibold">
                            Let the light follow your phone
                        </p>
                        <p className="max-w-64 text-left text-xs text-darken-700">
                            Tilt your device to move highlights and shadows
                            across the site.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={enableMotion}
                            className="motion-prompt-primary"
                        >
                            {preference === "motion" ? "Resume" : "Use motion"}
                        </button>
                        <button
                            type="button"
                            onClick={usePointer}
                            className="motion-prompt-secondary"
                        >
                            Use touch
                        </button>
                    </div>
                </aside>
            )}
            {permissionRequired && preference === "pointer" && (
                <button
                    type="button"
                    onClick={enableMotion}
                    className="motion-reenable"
                    title="Enable phone motion lighting"
                >
                    motion lighting
                </button>
            )}
        </>
    );
}
