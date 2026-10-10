## 2024-05-24 - Static JSON Loading Bottleneck in Nuxt API Routes
**Learning:** Nuxt API routes using `fs.readFile` and `JSON.parse` to read static local JSON data on every single request create significant unnecessary I/O overhead and memory allocation.
**Action:** In Nuxt/Nitro, import static JSON files directly as ES modules. This bundles the data at build time and caches it in memory, bypassing the file system entirely for a massive speedup on read-heavy static data APIs.
