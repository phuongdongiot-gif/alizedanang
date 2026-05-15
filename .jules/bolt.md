## 2023-10-27 - Direct ES Module Import Optimization

**Learning:** Replaced `fs.readFile` and `JSON.parse` with direct ES module imports (`import data from '../data.json'`) to serve static JSON data. Nuxt's Nitro server natively supports this and caches the JSON objects in memory across requests, reducing CPU cycles and avoiding file I/O bottlenecks.

**Action:** Whenever a server needs to serve purely static, local JSON files on every request, replace dynamic file-reading with static imports, ensuring that the loaded data is read-only (using non-mutating array methods like `.find` or `.filter`) to prevent memory leaks or state bleeding across requests.
