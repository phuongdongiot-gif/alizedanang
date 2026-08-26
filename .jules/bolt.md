## 2024-10-24 - Efficient Static JSON Loading in Nuxt/Nitro
**Learning:** In Nuxt/Nitro, using dynamic `fs.readFile` with `process.cwd()` for static JSON data is inefficient (re-parsing per request) and fragile in production builds. Direct ES module imports automatically bundle and cache the data in memory.
**Action:** Always use direct static JSON imports (`import data from '../data.json'`) for static data in Nitro API routes instead of `fs.readFile`. Remember to use non-mutating methods like `.filter()` if the cached data needs manipulation.
