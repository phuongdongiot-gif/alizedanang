## 2024-05-15 - Nuxt Nitro JSON Import Performance
**Learning:** In Nuxt/Nitro, using `fs.readFile` and `JSON.parse` inside request handlers adds significant unnecessary overhead for static JSON files. Nitro natively supports ES module imports of JSON files (e.g., `import data from '../data.json'`) which automatically bundles and caches the data in memory.
**Action:** Always use direct ES module imports for static JSON data in Nitro endpoints instead of reading from the filesystem on every request.
