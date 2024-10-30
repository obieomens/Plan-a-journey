import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

const webpack = import("@cypress/webpack-preprocessor");

async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", (await webpack)({
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: "ts-loader",
              },
            ],
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config,
              },
            ],
          },
        ],
      },
    },
  }));

  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/my-test-output.xml',
      toConsole: true
    },
    setupNodeEvents,
    pageLoadTimeout: 300000,
    baseUrl: 'https://tfl.gov.uk',
  }
});
