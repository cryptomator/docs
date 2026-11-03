# Cryptomator Documentation

Official documentation site for Cryptomator. Built with [Docusaurus](https://docusaurus.io/).

## Quick Start

This repo uses [pnpm](https://pnpm.io/) (pinned via `packageManager` in
`package.json`). The easiest way to get a matching version is to enable
[Corepack](https://nodejs.org/api/corepack.html): `corepack enable`.

```bash
pnpm install
pnpm start
```

Opens dev server at `http://localhost:8000` with live reload.

## Contributing

We welcome contributions! Please read our general [contributing guidelines](https://github.com/cryptomator/.github/blob/main/CONTRIBUTING.md) first. The following applies specifically to this repository.

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Follow the [Quick Start](#quick-start) above

### Making Changes

- Documentation files are in the `docs/` folder
- Use clear, concise language
- Include screenshots or examples where helpful
- Test your changes locally before submitting

### Submitting Changes

We follow git flow for contributions:

1. Create a feature branch: `git checkout -b feature/improve-docs`
2. Make your changes and commit: `git commit -m "Improve setup instructions"`
3. Push to your fork: `git push origin feature/improve-docs`
4. Open a pull request

*Note: Branch names and commit messages above are examples. Use descriptive names that reflect your actual changes.*

### Guidelines

- Keep content up-to-date with the latest app versions
- Use consistent formatting and style
- Break up long sections with headings and lists
- Link to related documentation when relevant

### Adding or Upgrading Dependencies

`pnpm-workspace.yaml` sets `minimumReleaseAge: 4320` (3 days). pnpm will refuse to resolve any package version younger than that — most malicious releases are detected and unpublished within hours, so the delay protects us at near-zero cost.

If you genuinely need a fresh release sooner (e.g. a security fix just published), add the specific package/version to `minimumReleaseAgeExclude` in `pnpm-workspace.yaml` and call it out in the PR description.

Routine upgrades land via Dependabot (configured in `.github/dependabot.yml`), which opens monthly grouped PRs for npm dependencies and GitHub Actions. Please don't run `pnpm up --latest` on the default branch — review the Dependabot PR instead, or open a PR with explicit version pins and a changelog link.

## Structure

- `docs/desktop/` - Desktop app documentation
- `docs/android/` - Android app documentation  
- `docs/ios/` - iOS app documentation
- `docs/hub/` - Cryptomator Hub documentation
- `docs/security/` - Encryption architecture and security details
- `docs/misc/` - Additional resources

## Scripts

```bash
pnpm build # Build static site
pnpm serve # Serve built site locally
```

Other scripts can be found in `package.json`.

## Deployment

Deployed to [docs.cryptomator.org](https://docs.cryptomator.org) via GitHub Pages from the `main` branch.

## License

This documentation is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License (CC-BY-SA 4.0)](LICENSE.txt).
