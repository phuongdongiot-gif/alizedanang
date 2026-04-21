## 2024-04-21 - Optimize JSON Loading in Nuxt APIs
**Learning:** Using `fs.readFile` and `JSON.parse` on every request in Nuxt API endpoints creates unnecessary disk I/O and parsing overhead.
**Action:** When serving static JSON data in a Nuxt (Nitro) API, use direct imports (`import data from '../data.json'`) instead. This allows the bundler to cache the parsed JSON in memory, significantly improving performance and avoiding bottleneck issues under load.
