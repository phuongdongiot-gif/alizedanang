## 2025-03-01 - JSON Data Fetching Bottleneck in Nitro
**Learning:** Dynamic fs.readFile for static JSON data on every request in Nitro endpoints causes unnecessary I/O overhead and risks failing in production builds if files aren't explicitly included.
**Action:** Always import static JSON files as ES modules in Nitro APIs. This bundles the data, caches it in memory, and avoids filesystem bottlenecks.
