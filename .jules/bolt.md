## 2024-05-18 - Nuxt/Nitro JSON Import Optimization
**Learning:** In Nuxt/Nitro production builds, raw static files are not automatically included unless explicitly configured. Using `fs.readFile` on every request is not only an inefficient I/O bottleneck but also fragile in production.
**Action:** Import JSON static data directly via ES modules. This caches the data in memory, avoids disk I/O, and ensures Nitro bundles the data correctly. When mutating this cached data, always use non-mutating methods like `.filter()` or assign to a mutable variable if needed.
