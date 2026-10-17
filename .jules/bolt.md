## 2024-10-17 - Replace fs.readFile with ES module JSON imports in Nitro APIs
**Learning:** The backend APIs in this Nuxt/Nitro app were directly reading JSON files using `fs.readFile` on every request. This is inefficient. We can directly import static JSON files as ES modules to cache them in memory.
**Action:** When static JSON data is used as a database, import it directly as an ES module instead of reading it from the filesystem on every request.
