## 2025-06-17 - Direct JSON imports in Nuxt Nitro
**Learning:** Nuxt's Nitro server handles direct imports of static JSON files very efficiently, bundling them directly into memory at startup. This completely bypasses async fs operations, resulting in much faster API endpoints for static data.
**Action:** Always look for dynamic reads of static JSON files (`fs.readFile`) and replace them with standard ES module imports (`import data from '...'`) for immediate performance wins.
