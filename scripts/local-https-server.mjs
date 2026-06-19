import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:https";
import { extname, join, normalize } from "node:path";
import { readFile } from "node:fs/promises";

const root = new URL("../dist/", import.meta.url).pathname;
const certificateDirectory =
    process.env.DUBEAU_CERT_DIR ||
    `${process.env.HOME}/.local/share/dubeau-local-ca`;
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
};

function resolveRequestPath(url) {
    const pathname = decodeURIComponent(new URL(url, "https://local").pathname);
    const requestedPath = normalize(join(root, pathname));

    if (!requestedPath.startsWith(root)) return join(root, "index.html");
    if (existsSync(requestedPath) && statSync(requestedPath).isFile()) {
        return requestedPath;
    }

    if (existsSync(requestedPath) && statSync(requestedPath).isDirectory()) {
        const directoryIndex = join(requestedPath, "index.html");

        if (existsSync(directoryIndex) && statSync(directoryIndex).isFile()) {
            return directoryIndex;
        }
    }

    if (extname(pathname)) {
        return null;
    }

    return join(root, "index.html");
}

const server = createServer(
    {
        cert: await readFile(join(certificateDirectory, "server.crt")),
        key: await readFile(join(certificateDirectory, "server.key")),
    },
    (request, response) => {
        const path = resolveRequestPath(request.url);

        if (!path) {
            response.writeHead(404, {
                "Cache-Control": "no-cache",
                "Content-Type": "text/plain; charset=utf-8",
            });
            response.end("Not found");
            return;
        }

        response.writeHead(200, {
            "Cache-Control": "no-cache",
            "Content-Type":
                mimeTypes[extname(path)] || "application/octet-stream",
        });
        createReadStream(path).pipe(response);
    },
);

server.listen(port, host, () => {
    console.log(`dubeau.org local HTTPS: https://192.168.2.118:${port}/`);
});
