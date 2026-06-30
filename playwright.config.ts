import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env["CI"];

export default defineConfig({
  forbidOnly: isCI,
  fullyParallel: true,
  projects: [
    {
      name: "Chrome",
      use: {
        ...devices["Desktop Chrome"],
        // Reuse pre-installed Chrome on CI.
        channel: isCI ? "chrome" : undefined,
        headless: true,
      },
    },
  ],
  reporter: "list",
  testMatch: "tests/*.test.ts",
  // The timeout for the accessibility tests only.
  timeout: 180 * 1_000,
  webServer: [
    {
      command: "pnpm run build && pnpm run preview",
      reuseExistingServer: !isCI,
      // The timeout of the single build step ran before the accessibility tests.
      timeout: 120 * 1_000,
      url: "http://localhost:4321",
    },
  ],
});
