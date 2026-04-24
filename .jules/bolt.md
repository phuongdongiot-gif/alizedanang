## 2024-06-25 - Direct JSON Imports in Nuxt APIs
**Learning:** Nuxt's backend endpoints can serve static JSON files faster by importing them directly using ES module imports, rather than dynamically reading them via `fs.readFile` on every request. Direct imports automatically parse the JSON and cache it in memory, bypassing expensive runtime I/O operations.
**Action:** When working with static JSON data in Nuxt server routes, use `import data from './data.json'` instead of `fs.readFile` to leverage memory caching and avoid unnecessary filesystem calls.
