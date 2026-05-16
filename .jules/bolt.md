## 2024-05-16 - Nuxt Nitro ES Module JSON Import Caching
**Learning:** In Nuxt/Nitro, replacing `fs.readFile` and `JSON.parse` with direct ES module imports of static JSON files caches the data in memory. The imported object is cached across requests, meaning any mutations to it will persist.
**Action:** When working with Nuxt APIs, always prefer importing static JSON directly rather than reading it from the filesystem. Be careful to use non-mutating array/object methods (like `Array.filter()`) to manipulate the cached data safely.
