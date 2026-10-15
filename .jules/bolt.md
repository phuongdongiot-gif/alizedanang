## 2026-10-15 - Caching static data with ES module imports in Nuxt/Nitro
**Learning:** In Nuxt/Nitro production builds, raw static files are not automatically included unless explicitly configured. Furthermore, using `fs.readFile` on every request for static data creates an unnecessary I/O bottleneck.
**Action:** Utilize ES module imports for static JSON data. This bundles the data directly into the build, caching it in memory and bypassing inefficient I/O operations and the fragility of raw static file inclusion.
