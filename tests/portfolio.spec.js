const { test, expect } = require("@playwright/test");

test.describe("E-commerce Search Flow", () => {
  test("Search for Playwright and verify results", async ({ page }) => {
    // 1. Go to the site
    await page.goto("https://playwright.dev/");

    // 2. Open Search
    await page.getByRole("button", { name: "Search" }).click();

    // 3. Type search term
    const searchInput = page.getByPlaceholder("Search docs");
    await searchInput.fill("locators");

    // 4. Instead of just Enter, we click the specific result that appears
    // This is much more stable than hoping 'Enter' triggers the right redirect
    await page
      .getByRole("link", { name: "Locators", exact: true })
      .first()
      .click();

    // 5. Verify the URL has moved to docs/locators
    await expect(page).toHaveURL(/.*locators/);

    // 6. Verify the heading
    const heading = page.locator("header h1");
    await expect(heading).toHaveText("Locators");

    console.log("Success: Reached the Locators page!");
  });
});
