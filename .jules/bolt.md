## 2024-05-20 - [Nuxt Nitro Static JSON Imports]
**Learning:** In Nuxt/Nitro, using `fs.readFile` and `process.cwd()` to load static JSON files dynamically on every request is inefficient and brittle in production. Direct ES module imports of JSON files are natively supported without import assertions, automatically bundling and caching data in memory.
**Action:** Always use direct static JSON imports (e.g., `import data from '../data.json'`) instead of `fs.readFile` for static datasets to improve performance and prevent production path bugs.
