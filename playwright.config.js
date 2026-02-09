const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests", // This tells Playwright where your folder is!
  fullyParallel: true,
  reporter: "html",
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
