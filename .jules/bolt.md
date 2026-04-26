## 2024-05-24 - Static JSON Imports in Nitro Server
**Learning:** Nuxt's Nitro server natively supports static ES module imports of JSON files. Using `import data from '../data.json'` allows Nitro to automatically bundle and cache the JSON data in memory at startup, entirely bypassing expensive synchronous/asynchronous `fs.readFile` and `JSON.parse` operations on every request.
**Action:** When creating server API endpoints that serve static JSON data in a Nuxt/Nitro application, prefer direct static imports over runtime file system reads to maximize performance and reduce I/O overhead.
