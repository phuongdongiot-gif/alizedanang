## 2024-11-08 - ES Module Static JSON Imports
**Learning:** In Nuxt/Nitro production builds, raw static JSON files fetched via fs.readFile are not automatically included and parsing them on every request creates an I/O bottleneck.
**Action:** Use ES module imports to statically bundle JSON data into the build for better performance and reliability.
