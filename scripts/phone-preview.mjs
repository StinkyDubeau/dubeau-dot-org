import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import QRCode from "qrcode";

const distDir = path.resolve("dist");
const phoneDir = path.join(distDir, "phone");
const publicUrl = process.env.PREVIEW_URL ?? "";
const localUrl = process.env.LOCAL_URL ?? "";
const tunnelPassword = process.env.TUNNEL_PASSWORD ?? "";

if (!publicUrl) {
    console.error("PREVIEW_URL is required");
    process.exit(1);
}

const escapeHtml = (value) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

const previewQr = await QRCode.toString(publicUrl, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 1,
    width: 280,
    color: {
        dark: "#dce9ff",
        light: "#0000",
    },
});

const localQr = localUrl
    ? await QRCode.toString(localUrl, {
          type: "svg",
          errorCorrectionLevel: "M",
          margin: 1,
          width: 220,
          color: {
              dark: "#dce9ff",
              light: "#0000",
          },
      })
    : "";

const html = `<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>dubeau.org phone preview</title>
        <style>
            :root {
                color-scheme: dark;
                --bg: #08101b;
                --panel: rgba(11, 18, 31, 0.82);
                --panel-border: rgba(182, 214, 255, 0.2);
                --text: #edf4ff;
                --muted: #94a8c8;
                --accent: #78c4ff;
                --accent-2: #f5c46b;
                --shadow: 0 28px 80px rgba(0, 0, 0, 0.45);
            }

            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                min-height: 100vh;
                font-family: "Lexend", "Segoe UI", sans-serif;
                color: var(--text);
                background:
                    radial-gradient(circle at top, rgba(120, 196, 255, 0.2), transparent 36%),
                    radial-gradient(circle at bottom right, rgba(245, 196, 107, 0.14), transparent 26%),
                    linear-gradient(180deg, #09111d 0%, #05080e 100%);
            }

            main {
                width: min(1040px, calc(100% - 32px));
                margin: 0 auto;
                padding: 32px 0 48px;
            }

            .hero {
                margin-bottom: 24px;
                padding: 28px;
                border: 1px solid var(--panel-border);
                border-radius: 28px;
                background: var(--panel);
                box-shadow: var(--shadow);
                backdrop-filter: blur(20px);
            }

            .eyebrow {
                margin: 0 0 8px;
                font-size: 0.8rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: var(--accent-2);
            }

            h1 {
                margin: 0;
                font-size: clamp(2rem, 5vw, 3.8rem);
                line-height: 0.95;
            }

            .lede {
                max-width: 46rem;
                margin: 14px 0 0;
                color: var(--muted);
                font-size: 1.05rem;
                line-height: 1.6;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 20px;
            }

            .panel {
                padding: 22px;
                border-radius: 24px;
                border: 1px solid var(--panel-border);
                background: var(--panel);
                box-shadow: var(--shadow);
                backdrop-filter: blur(20px);
            }

            .label {
                margin: 0 0 10px;
                font-size: 0.8rem;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: var(--accent);
            }

            .qr {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 240px;
                padding: 16px;
                border-radius: 20px;
                background:
                    radial-gradient(circle at top, rgba(120, 196, 255, 0.14), transparent 48%),
                    rgba(4, 9, 17, 0.84);
                border: 1px solid rgba(182, 214, 255, 0.12);
            }

            .qr svg {
                width: min(100%, 280px);
                height: auto;
            }

            .link {
                display: block;
                margin-top: 16px;
                color: var(--text);
                text-decoration: none;
                font-weight: 700;
                word-break: break-word;
            }

            .link:hover {
                color: var(--accent);
            }

            .password {
                margin-top: 14px;
                padding: 14px 16px;
                border-radius: 16px;
                background: rgba(245, 196, 107, 0.08);
                border: 1px solid rgba(245, 196, 107, 0.18);
            }

            code {
                font-family: "Roboto Mono", "SFMono-Regular", monospace;
                font-size: 0.95rem;
                color: var(--accent-2);
            }

            .muted {
                color: var(--muted);
                line-height: 1.55;
            }

            .actions {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                margin-top: 18px;
            }

            .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-height: 46px;
                padding: 0 18px;
                border-radius: 999px;
                background: linear-gradient(135deg, rgba(120, 196, 255, 0.9), rgba(71, 132, 255, 0.78));
                color: #08101b;
                text-decoration: none;
                font-weight: 800;
                box-shadow: 0 12px 32px rgba(71, 132, 255, 0.34);
            }

            .button.secondary {
                background: rgba(220, 233, 255, 0.08);
                color: var(--text);
                box-shadow: none;
                border: 1px solid rgba(220, 233, 255, 0.12);
            }
        </style>
    </head>
    <body>
        <main>
            <section class="hero">
                <p class="eyebrow">Phone Preview</p>
                <h1>Open the current build without typing anything.</h1>
                <p class="lede">
                    Scan the public preview QR from your phone, or open the local fallback if the tunnel is
                    healthy on your Wi-Fi. This page exists to reduce broken manual copy/paste and make the
                    preview flow one scan and one tap.
                </p>
                <div class="actions">
                    <a class="button" href="${escapeHtml(publicUrl)}">Open Public Preview</a>
                    ${
                        localUrl
                            ? `<a class="button secondary" href="${escapeHtml(localUrl)}">Open Local Fallback</a>`
                            : ""
                    }
                </div>
            </section>

            <section class="grid">
                <article class="panel">
                    <p class="label">Public Preview</p>
                    <div class="qr">${previewQr}</div>
                    <a class="link" href="${escapeHtml(publicUrl)}">${escapeHtml(publicUrl)}</a>
                    ${
                        tunnelPassword
                            ? `<div class="password">
                                <div class="muted">Tunnel password</div>
                                <code>${escapeHtml(tunnelPassword)}</code>
                            </div>`
                            : ""
                    }
                </article>

                <article class="panel">
                    <p class="label">Local Fallback</p>
                    ${
                        localQr
                            ? `<div class="qr">${localQr}</div>
                               <a class="link" href="${escapeHtml(localUrl)}">${escapeHtml(localUrl)}</a>
                               <p class="muted">Use this only when your phone can reach the PC directly over the same Wi-Fi.</p>`
                            : `<div class="qr"><p class="muted">No local fallback URL was generated for this preview.</p></div>`
                    }
                </article>
            </section>
        </main>
    </body>
</html>`;

await fs.mkdir(phoneDir, { recursive: true });
await fs.writeFile(path.join(phoneDir, "index.html"), html);
await fs.writeFile(path.join(phoneDir, "preview-qr.svg"), previewQr);

if (localQr) {
    await fs.writeFile(path.join(phoneDir, "local-qr.svg"), localQr);
}

console.log(`Generated ${path.join(phoneDir, "index.html")}`);
