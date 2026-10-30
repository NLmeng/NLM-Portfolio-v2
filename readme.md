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

### End-to-end tests

Playwright tests live in `e2e/` and run against a production build made with
the fixture content in `e2e/fixtures/content.ts`, never the real content. The
server is started on `127.0.0.1:3100` (override with `E2E_PORT`).

```sh
yarn playwright install chromium   # once
yarn test:e2e                      # build + run every viewport project
yarn test:e2e --project=mobile     # one viewport
yarn test:e2e:ui                   # interactive UI mode
yarn test:e2e:update               # accept intentional screenshot changes
yarn test:e2e:report               # open the last HTML report / traces
```

Set `E2E_SKIP_BUILD=1` to reuse an existing `.next` build, but only one made
by a previous e2e run (it must contain the fixture content).

Every test runs in five viewport projects: `mobile` 390×844, `tablet`
820×1180, `short-laptop` 1280×720, `desktop` 1440×900 and `wide` 1920×1080.
The home page uses the desktop layout only at 768px+ in both width and height,
so `short-laptop` gets the stacked layout. Use the helpers in
`e2e/support/test.ts`: the `layout` fixture, `desktopOnly()` / `stackedOnly()`,
`gotoHome(page, { clock: true })` to drive timers with `page.clock` (no
`waitForTimeout`), `setTheme()` and `scrollToSection()`. Uncaught page errors
fail a test automatically.

CI (`.github/workflows/ci.yml`) runs lint, typecheck and the e2e suite on every
PR and uploads the report and traces when it fails.

See [SECURITY.md](SECURITY.md) for the remaining upstream development dependency
advisory and audit commands.
