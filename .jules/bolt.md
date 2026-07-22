## 2024-07-22 - [JSON Memory Caching Optimization]
**Learning:** Nuxt Nitro natively supports direct ES module imports for JSON files, which caches the data in memory. Using `fs.readFile` and `JSON.parse` on every request introduces unnecessary I/O overhead. Additionally, imported JSON objects are read-only constants; when filtering, they must be reassigned to a mutable variable.
**Action:** Always prefer ES module imports for static JSON data in Nuxt APIs instead of reading the file system to avoid I/O bottlenecks.
