## 2024-05-18 - Caching JSON data with ES module imports
**Learning:** In Nuxt Nitro applications, replacing `fs.readFile` and `JSON.parse` with ES module imports (e.g., `import data from '../data.json'`) caches the data in memory. This eliminates disk I/O and parsing overhead for every request, improving performance significantly for static data files.
**Action:** Always prefer ES module imports for static JSON data when the data does not change dynamically, ensuring non-mutating array operations (like `.filter()`) are used to protect the cached memory.
