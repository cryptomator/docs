# Contributing to Cryptomator Documentation

Thank you for helping improve Cryptomator's documentation! 

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Enable Corepack so the pinned pnpm version is used: `corepack enable`
4. Install dependencies: `pnpm install`
5. Start development server: `pnpm start`

## Making Changes

- Documentation files are in the `docs/` folder
- Use clear, concise language
- Include screenshots or examples where helpful
- Test your changes locally before submitting

## Submitting Changes

We follow git flow for contributions:

1. Create a feature branch: `git checkout -b feature/improve-docs`
2. Make your changes and commit: `git commit -m "Improve setup instructions"`
3. Push to your fork: `git push origin feature/improve-docs`
4. Open a pull request

*Note: Branch names and commit messages above are examples. Use descriptive names that reflect your actual changes.*

## Guidelines

- Keep content up-to-date with the latest app versions
- Use consistent formatting and style
- Break up long sections with headings and lists
- Link to related documentation when relevant

## Adding or upgrading dependencies

`pnpm-workspace.yaml` sets `minimumReleaseAge: 4320` (3 days). pnpm
will refuse to resolve any package version younger than that — most
malicious releases are detected and unpublished within hours, so the
delay protects us at near-zero cost.

If you genuinely need a fresh release sooner (e.g. a security fix
just published), add the specific package/version to
`minimumReleaseAgeExclude` in `pnpm-workspace.yaml` and call it out
in the PR description.

## Code of Conduct

Help us keep Cryptomator open and inclusive. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Above All, Thank You for Your Contributions

Thank you for taking the time to contribute to the project! :+1:

Cryptomator Team
