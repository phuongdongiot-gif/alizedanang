## 2024-04-28 - Native JSON imports in Nitro
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files, allowing them to be automatically bundled and cached in memory.
**Action:** Always prefer static `import data from './data.json'` over dynamic `fs.readFile` and `JSON.parse` in Nitro server handlers when dealing with static data to eliminate disk I/O and parsing overhead.
