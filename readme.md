# NLM-Portfolio-v2

This is the second version of my portfolio website, designed with a more focused and minimalistic approach.

## Built With

- **Next.js 16.3.6**
- **React 19**
- **TailwindCSS 3**
- **TypeScript**

### Prerequisites

- **Node.js 24 LTS** (`nvm use`)
- **Yarn 1.22.22** (pinned in `package.json`)

Install with `yarn install --frozen-lockfile`, then run `yarn lint` and
`yarn build`. Builds require the `NEXT_PUBLIC_PROJECTS` and
`NEXT_PUBLIC_EXPERIENCE_DATA` environment variables to contain JSON arrays.
Use `[]` for each when validating a build without portfolio content; configure
the real content separately in Vercel's Preview and Production environments.

See [SECURITY.md](SECURITY.md) for the remaining upstream development dependency
advisory and audit commands.
