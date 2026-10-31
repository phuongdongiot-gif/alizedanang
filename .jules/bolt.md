## 2026-10-31 - [Performance Improvement: Static JSON Data Fetching]
**Learning:** Using fs.readFile to read static JSON files in Nuxt Nitro backend APIs causes inefficient disk I/O on every request.
**Action:** Refactored endpoints to use ES module imports with { type: 'json' } for static JSON files to cache data in memory and avoid disk reads.
