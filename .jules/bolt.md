## 2024-05-21 - [JSON In-Memory Caching in Nuxt Nitro]
**Learning:** Nuxt Nitro natively supports direct ES module imports of JSON files. This automatically caches the parsed JSON object in memory, bypassing costly disk I/O and `JSON.parse` operations that would otherwise execute on every single request.
**Action:** When working with static JSON data in Nuxt/Nitro server API endpoints, prefer static ES module imports over dynamic `fs.readFile` and `JSON.parse` to significantly optimize response latency and CPU usage.
