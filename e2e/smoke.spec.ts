import { FULL_NAME, ONE_LINER } from "./fixtures/content";
import { expect, gotoHome, setTheme, test } from "./support/test";

// Harness smoke test (#65): proves the build uses fixture content and that
// each viewport project lands on the layout the matrix expects. Feature
// coverage lives in the per-feature specs.

test("home renders fixture content", async ({ page }) => {
  await gotoHome(page);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(FULL_NAME);
  await expect(page.getByText(ONE_LINER)).toBeVisible();
});

test("home renders the layout for this viewport", async ({ page, layout }) => {
  await gotoHome(page);
  const seeAll = page.getByRole("link", { name: /See All Projects/ });
  if (layout === "desktop") {
    await expect(seeAll).toBeVisible();
  } else {
    await expect(seeAll).toHaveCount(0);
  }
});

test("fake clock drives app timers", async ({ page }) => {
  await gotoHome(page, { clock: true });
  // The fixed down button hides itself after 5s (src/app/page.tsx).
  const downButton = page.getByRole("button", { name: "Down" });
  await expect(downButton).toBeVisible();
  await page.clock.runFor(5_100);
  await expect(downButton).toHaveCount(0);
});

test("theme cookie helper applies before load", async ({ page }) => {
  await setTheme(page, "dark");
  await gotoHome(page);
  await expect(page.locator("body")).toHaveClass(/dark-mode/);
});

test("projects page renders", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: /All Projects/ })).toBeVisible();
});
