## GitHub Copilot Chat

- Extension Version: 0.27.1 (prod)
- VS Code: vscode/1.100.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.207.73.85 (779 ms)
- DNS ipv6 Lookup: Error (747 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (16 ms)
- Electron fetch (configured): HTTP 200 (3165 ms)
- Node.js https: HTTP 200 (9024 ms)
- Node.js fetch: timed out after 10 seconds
- Helix fetch: HTTP 200 (8726 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.22 (546 ms)
- DNS ipv6 Lookup: Error (493 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (45 ms)
- Electron fetch (configured): HTTP 200 (7772 ms)
- Node.js https: HTTP 200 (8417 ms)
- Node.js fetch: HTTP 200 (7414 ms)
- Helix fetch: HTTP 200 (3694 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).