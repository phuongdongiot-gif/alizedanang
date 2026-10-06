## 2024-05-24 - [Replace dynamic fs.readFile with ES module JSON imports for performance]
**Learning:** [Dynamic fs.readFile in Nuxt Nitro is inefficient for static JSON and can cause process.cwd() bugs. Using ES module imports caches the JSON directly in memory.]
**Action:** [Always use static ES module imports for JSON data in Nuxt API routes when the data is read-only or can be safely cloned/filtered, to eliminate disk I/O bottlenecks.]
