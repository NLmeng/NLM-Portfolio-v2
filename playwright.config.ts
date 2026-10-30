import { defineConfig, devices } from "@playwright/test";
import { fixtureEnv } from "./e2e/fixtures/content";

const PORT = Number(process.env.E2E_PORT ?? 3100);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const isCI = !!process.env.CI;

// The home page switches to the desktop layout only when the window is at
// least 768px wide AND 768px tall (src/app/page.tsx), so the matrix covers
// both sides of each boundary, including a wide-but-short laptop.
const desktopChrome = devices["Desktop Chrome"];
const pixel = devices["Pixel 7"];

export default defineConfig({
  testDir: "./e2e",
  outputDir: "./test-results",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: isCI
    ? [["github"], ["list"], ["html", { open: "never" }]]
    : [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "mobile",
      use: { ...pixel, viewport: { width: 390, height: 844 } },
    },
    {
      name: "tablet",
      use: {
        ...desktopChrome,
        viewport: { width: 820, height: 1180 },
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: "short-laptop",
      use: { ...desktopChrome, viewport: { width: 1280, height: 720 } },
    },
    {
      name: "desktop",
      use: { ...desktopChrome, viewport: { width: 1440, height: 900 } },
    },
    {
      name: "wide",
      use: { ...desktopChrome, viewport: { width: 1920, height: 1080 } },
    },
  ],
  webServer: {
    // Always build with fixture content and serve on loopback only.
    // Never reuse an already-running server: it may carry real content.
    command: process.env.E2E_SKIP_BUILD
      ? `npx next start -H 127.0.0.1 -p ${PORT}`
      : `npx next build --webpack && npx next start -H 127.0.0.1 -p ${PORT}`,
    url: BASE_URL,
    env: fixtureEnv,
    reuseExistingServer: false,
    timeout: 300_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
