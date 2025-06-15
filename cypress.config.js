const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // ✅ Se especifica el directorio donde están los step definitions
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: "cypress/e2e/features/step_definitions"
      });

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      return config;
    },

    // ✅ Patrón para que se detecten los archivos .feature correctamente
    specPattern: "cypress/e2e/features/**/*.feature",

    // ✅ Base URL para tests que usen cy.visit() o cy.request()
    baseUrl: "http://localhost:3000"
  },
});
