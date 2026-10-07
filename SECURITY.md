# Dependency security

Last checked: 2026-10-06.

Run `yarn audit` to include both production and development dependencies.
Run `yarn audit --groups dependencies` to check production dependencies alone.
Do not treat a production-only audit as proof that the full tree is clean.

## Pending upstream fix

[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
affects `braces@3.0.3`. No patched version is published as of the date above.
The full audit reports this advisory through three development dependency paths
in Tailwind CSS and the Next.js ESLint plugin. The production dependency audit
is clean, and the Node 24 production build's `.nft.json` deployment traces do
not include `node_modules/braces/`.

The vulnerable operation processes deeply nested glob patterns. This project
uses repository-controlled patterns in `tailwind.config.ts` and lint tooling;
it does not accept request input as glob patterns. Keep these tools restricted
to trusted source/configuration, and do not expose them as a service for
untrusted patterns. This limits exposure but does not patch the dependency.
Keep the advisory open until an upstream fix or compatible removal is available.

## Compatibility overrides

`postcss-selector-parser` is resolved to 7.1.6 to fix
[GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf).
Tailwind CSS and its selector helpers still request version 6, so Yarn reports
a resolution warning. Lint and the production CSS build pass with the override.
Recheck both when updating Tailwind or changing selectors.
