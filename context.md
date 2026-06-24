Context notes
============

When making visual/front-end changes in this project, always capture screenshots and verify the result before finalizing.

- Use the local Vite dev server (typically `http://127.0.0.1:4173`).
- Capture a before/after screenshot for affected views with headless Chromium before/after edits.
- Example command: `chromium --headless --disable-gpu --no-sandbox --window-size=390,3200 --screenshot=/tmp/fun-mobile.png --timeout=12000 --virtual-time-budget=9000 <url>`.
- Review the resulting image and keep that as part of the fix process before pushing.
