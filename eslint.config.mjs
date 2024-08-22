import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import prettier from "eslint-config-prettier";
export default [
  // CommonJS files configuration
  {
    files: ["**/*.cjs", "**/commonjs/**/*.js"], // Adjust the pattern as needed
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node, // CommonJS environments usually involve Node.js,
      eslintConfigPrettier,
      rules: {
        indent: "error",
      },
    },
  },

  // ES6 modules configuration
  {
    files: ["**/*.mjs", "**/es6/**/*.js"], // Adjust the pattern as needed
    languageOptions: {
      sourceType: "module",
      globals: globals.es2021, // ES6 environments, more modern globals
    },
  },
  // General configuration applicable to all JS files
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser, // Allow browser globals in all JS files
      },
    },

    ...pluginJs.configs.recommended,
    ...prettier,
  },
];
