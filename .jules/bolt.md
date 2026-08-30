## 2024-05-20 - Nuxt Nitro Direct JSON Imports
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files. This approach caches the data in memory, significantly improving performance by eliminating disk I/O per request. It also avoids production bugs related to `process.cwd()` pointing to unexpected directories, since the bundler embeds the JSON data directly.
**Action:** Always prefer direct JSON imports over `fs.readFile` and `JSON.parse` when loading static data in Nuxt API endpoints.
