## 2026-11-10 - Optimize Nuxt JSON data loading
**Learning:** In Nuxt/Nitro production builds, raw static files read via `fs.readFile` are not automatically included and have performance overhead. Utilizing ES module imports with `with { type: 'json' }` bypasses this by bundling static JSON data directly in memory.
**Action:** Replace `fs.readFile` with ES module imports for static JSON files to ensure correctness and improve performance.
