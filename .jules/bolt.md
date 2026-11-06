## 2024-11-06 - Replacing fs.readFile with ES module imports in Nitro
**Learning:** In Nuxt/Nitro production builds, raw static files are not automatically included unless explicitly configured, and using fs.readFile on them is inefficient as it accesses the disk on each request. Utilizing ES module imports bypasses this fragility by bundling the static JSON data directly into the build and caches it in memory.
**Action:** Always import static JSON data as ES modules in backend APIs to ensure inclusion in production builds and improve performance by avoiding disk I/O.
