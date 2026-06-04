## 2026-06-04 - In-memory JSON caching in Nuxt Nitro
**Learning:** In Nuxt/Nitro, dynamic `fs.readFile` with `process.cwd()` for static JSON data is not only a performance bottleneck (blocking I/O on every request) but can also cause deployment bugs since source files may not be preserved in the `.output` bundle.
**Action:** Always prefer direct ES module imports (`import data from './data.json'`) for static JSON in Nuxt Nitro server routes, which automatically bundles the file and caches it in memory.
