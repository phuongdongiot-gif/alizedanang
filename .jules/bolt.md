
## 2024-05-24 - ES Module JSON Imports in Nuxt Nitro
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files. Using `import data from './data.json'` instead of `fs.readFile` and `JSON.parse` not only caches the data in memory for faster access, but also avoids production bugs where `process.cwd()` doesn't point to the original source directories.
**Action:** Always prefer direct static JSON imports over dynamic file system reads for static data in Nuxt/Nitro APIs to improve performance and deployment reliability.
