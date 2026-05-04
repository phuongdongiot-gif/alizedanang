## 2024-05-27 - Direct ES Module Imports for JSON in Nuxt Nitro
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files (e.g., `import data from '../data.json'`) without requiring import assertions. The data is automatically bundled and cached in memory, which avoids inefficient `fs.readFile` operations on every request. Direct mutation on the imported object persists across requests.
**Action:** When working on backend APIs that read static JSON files, refactor the `fs.readFile` and `JSON.parse` logic into direct ES module imports to cache the data in memory.
