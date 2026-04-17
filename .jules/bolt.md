## 2024-05-15 - Optimize static JSON reading in API endpoints
**Learning:** Reading static JSON files using `fs.readFile` inside Nuxt Nitro API endpoints executes on every request, adding unnecessary async overhead and disk I/O.
**Action:** Always import static JSON files directly (e.g. `import data from '../data.json'`) when the data doesn't change during runtime. This allows the bundler to include the JSON directly in the memory at startup (or load it synchronously once), turning a disk read operation into an O(1) memory lookup and significantly improving response latency.
