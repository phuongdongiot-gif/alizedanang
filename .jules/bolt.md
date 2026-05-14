## 2026-05-14 - Cached JSON memory mutation risk
**Learning:** When replacing `fs.readFile` and `JSON.parse` with direct ES module JSON imports in Nuxt Nitro, the imported object is cached in memory. Any direct mutations to it will persist across future requests, unlike `JSON.parse` which provides a fresh clone per request.
**Action:** Always use non-mutating methods (e.g., `Array.filter()`) or clone the data before manipulating it to safely interact with cached imported JSON.
