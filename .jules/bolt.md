## 2024-05-24 - Nuxt Nitro JSON Imports
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files. This automatically bundles and caches the data in memory without the need for `fs.readFile` and `JSON.parse` on every request.
**Action:** Always prefer direct imports of static JSON files over `fs.readFile` in Nuxt 3/4 server routes for built-in caching and performance.
