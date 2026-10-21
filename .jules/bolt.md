## 2023-10-24 - Static JSON Imports in Nuxt
**Learning:** In Nuxt/Nitro, using fs.readFile for static JSON incurs disk I/O on every request and causes fragility in production builds since raw files are not always bundled. Importing JSON directly via ES modules caches them in memory and ensures they are bundled.
**Action:** Use ES module imports for static data files instead of file system operations in server endpoints.
