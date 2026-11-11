## 2024-10-24 - [Bypass fs.readFile for Static JSON]
**Learning:** [In Nuxt/Nitro production builds, relying on fs.readFile for static JSON data causes inefficient disk I/O on every request, and raw static files are not automatically included unless explicitly configured.]
**Action:** [Import static JSON files directly as ES modules, which bundles the data directly into the build and caches it in memory.]
