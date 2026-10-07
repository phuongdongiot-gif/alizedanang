## 2024-05-24 - Optimize JSON Loading in Nuxt/Nitro
**Learning:** In Nuxt/Nitro, reading static JSON files with fs.readFile and process.cwd() per request is inefficient and brittle in production. Production builds do not automatically include raw static files, and process.cwd() might not point to the original source directories.
**Action:** Import static JSON files directly as ES modules. This bundles the data, caches it in memory, and avoids file system overhead on every request. Remember to use non-mutating methods like Array.filter() when manipulating these cached objects.
