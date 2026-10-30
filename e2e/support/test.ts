import { test as base, expect, Page } from "@playwright/test";

export type Layout = "desktop" | "stacked";
export type Theme = "light" | "dark";
export type SectionId = "about" | "experience" | "projects";

/** Mirrors the layout rule in src/app/page.tsx. */
export const layoutFor = (size: { width: number; height: number }): Layout =>
  size.width >= 768 && size.height >= 768 ? "desktop" : "stacked";

type Fixtures = {
  /** Layout the home page should render for this project's viewport. */
  layout: Layout;
  /** Uncaught page errors seen during the test; asserted empty after it. */
  pageErrors: Error[];
};

export const test = base.extend<Fixtures>({
  layout: async ({ viewport }, use) => {
    if (!viewport) throw new Error("Every e2e project must set a viewport");
    await use(layoutFor(viewport));
  },
  pageErrors: [
    async ({ page }, use) => {
      const errors: Error[] = [];
      page.on("pageerror", (err) => errors.push(err));
      await use(errors);
      expect(errors, "uncaught page errors").toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };

/** Skip the current test unless the viewport renders the given layout. */
export const onlyLayout = (layout: Layout) =>
  test.skip(
    ({ layout: actual }) => actual !== layout,
    `${layout}-layout only`
  );

export const desktopOnly = () => onlyLayout("desktop");
export const stackedOnly = () => onlyLayout("stacked");

/**
 * Open the home page. Pass `clock: true` to install Playwright's fake clock
 * first, so the app's timers (3s nav collapse, 5s down button and timeline
 * steps, 2s carousel animation) are driven with `page.clock` instead of
 * real waiting.
 */
export async function gotoHome(
  page: Page,
  opts: { clock?: boolean; query?: string } = {}
) {
  if (opts.clock) await page.clock.install();
  await page.goto(`/${opts.query ? `?${opts.query}` : ""}`);
  await expect(page.locator("h1").first()).toBeVisible();
}

/** Preset the theme cookie before the page loads. */
export async function setTheme(page: Page, theme: Theme) {
  const baseURL = test.info().project.use.baseURL;
  if (!baseURL) throw new Error("baseURL is not configured");
  await page
    .context()
    .addCookies([{ name: "pref-theme-cookie", value: theme, url: baseURL }]);
}

/** Jump a section into view without smooth scrolling. */
export async function scrollToSection(page: Page, id: SectionId) {
  await page.locator(`section#${id}`).evaluate((el) =>
    el.scrollIntoView({ block: "center", behavior: "instant" })
  );
}
