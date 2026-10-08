import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/**/*.feature",
  steps: "playwright/steps/**/*.ts",
  missingSteps: "skip-scenario", // temporaire, à retirer quand toutes les steps existeront
});

export default defineConfig({
  testDir,
  use: {
    baseURL: "http://localhost:8080",
    testIdAttribute: "data-test",
  },
  webServer: {
    command: "npm start",
    url: "http://localhost:8080",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: process.env.CI ? undefined : "chrome",
      },
    },
  ],
});
