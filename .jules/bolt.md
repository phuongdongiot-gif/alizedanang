## 2024-11-01 - [Nuxt/Nitro JSON Import Optimization]
**Learning:** [In Nuxt/Nitro production builds, raw static files are not automatically included unless configured. Utilizing ES module imports bypasses this fragility by bundling the static JSON data directly into the build, replacing inefficient fs.readFile operations.]
**Action:** [Always use ES module imports for static JSON data to cache them in memory and ensure inclusion in the build.]
