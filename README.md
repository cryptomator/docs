# Cryptomator Documentation

Official documentation site for Cryptomator. Built with [Docusaurus](https://docusaurus.io/).

## Contributing

We welcome contributions! Please read our [contributing guidelines](.github/CONTRIBUTING.md) for details on how to help.

## Quick Start

This repo uses [pnpm](https://pnpm.io/) (pinned via `packageManager` in
`package.json`). The easiest way to get a matching version is to enable
[Corepack](https://nodejs.org/api/corepack.html): `corepack enable`.

```bash
pnpm install
pnpm start
```

Opens dev server at `http://localhost:3000` with live reload.

## Structure

- `docs/desktop/` - Desktop app documentation
- `docs/android/` - Android app documentation  
- `docs/ios/` - iOS app documentation
- `docs/hub/` - Cryptomator Hub documentation
- `docs/security/` - Encryption architecture and security details
- `docs/misc/` - Additional resources

## Scripts

```bash
pnpm run build # Build static site
pnpm run serve # Serve built site locally
```

Other scripts can be found in `package.json`.

## Deployment

Deployed to [docs.cryptomator.org](https://docs.cryptomator.org) via GitHub Pages from the `main` branch.

## License

This documentation is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License (CC-BY-SA 4.0)](LICENSE.txt).
