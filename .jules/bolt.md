## 2024-05-24 - JSON parsing performance in Nuxt API
**Learning:** Nuxt's Nitro server natively supports ES module imports for JSON files, which caches the parsed JSON object in memory automatically, eliminating the need to read and parse the file on every request. This is particularly important because using process.cwd() with fs.readFile is prone to failure in production deployments.
**Action:** Replace dynamic fs.readFile and JSON.parse with static imports for local static JSON data sources in Nuxt applications to boost performance and prevent production errors.
