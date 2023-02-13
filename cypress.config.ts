import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "cm8nrf",
  viewportWidth: 1366,
  viewportHeight: 768,
  pageLoadTimeout: 60000,
  requestTimeout: 120000,
  video: false,
  retries: 0,
  chromeWebSecurity:false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    env: {
      // https://github.com/bahmutov/cypress-slow-down
      commandDelay: 100,
    },

    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.ebay.com/",
    specPattern: "cypress/integration/*.feature",
    supportFile: "cypress/support/index.js",
  },
});
