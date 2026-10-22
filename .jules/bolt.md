## 2025-10-22 - Replacing fs.readFile with JSON imports in Nuxt API
**Learning:** In Nuxt/Nitro backend routes, using fs.readFile to load static JSON files is slow, requires manual path resolution, and is fragile during production builds. ES module imports bundle the data directly, caching it in memory.
**Action:** Always import static JSON files directly (e.g., import data from './data.json') instead of reading them via the file system in server-side routes.
