const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://apex.oracle.com/pls/apex/r/neriworkspace/qa-application",
  },
});
