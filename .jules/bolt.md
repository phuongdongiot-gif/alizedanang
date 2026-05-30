## 2024-05-27 - Nitro JSON Import Optimization
**Learning:** In Nuxt/Nitro, replacing `fs.readFile` and `JSON.parse` with direct ES module imports of JSON files not only eliminates expensive runtime I/O and parsing but also natively bundles the static data. The imported object is cached in memory across requests.
**Action:** When working with static JSON data in Nuxt/Nitro API routes, prefer direct ES module imports over dynamic file system reads to improve performance, while ensuring any data manipulation uses non-mutating methods.
