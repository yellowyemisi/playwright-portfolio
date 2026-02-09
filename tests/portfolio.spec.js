const { test, expect } = require("@playwright/test");

test.describe("E-commerce Search Flow", () => {
  test("Search for Playwright and verify results", async ({ page }) => {
    // 1. Navigate to the Playwright documentation
    await page.goto("https://playwright.dev/");

    // 2. Click the Search button (handling the keyboard shortcut UI)
    await page.getByRole("button", { name: "Search" }).click();

    // 3. Type "locators" into the search input
    const searchInput = page.getByPlaceholder("Search docs");
    await searchInput.fill("locators");

    // 4. Press Enter and verify the first result contains "Locators"
    await page.keyboard.press("Enter");

    // 5. Verify the heading of the new page
    const heading = page.locator("h1");
    await expect(heading).toContainText("Locators");

    console.log(
      "Test passed: Successfully navigated to Locators documentation!"
    );
  });
});
