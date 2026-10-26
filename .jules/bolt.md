## 2023-10-26 - [Avoid fs.readFile for static JSON]
**Learning:** [Using fs.readFile in Nuxt/Nitro APIs for static JSON causes I/O bottlenecks and risks missing files in production since raw static files are not automatically bundled. ES module imports bypass this by bundling the static JSON data directly into the build and caching it in memory.]
**Action:** [Use ES module imports for static JSON files to ensure they are bundled and cached in memory instead of reading them from the file system on every request.]
