module.exports = {
  "plugins": [
    "import"
  ],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:import/errors",
    "plugin:import/typescript",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn"
    ],
    "no-console": "warn",
    "indent": [
      1,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "capitalized-comments": "warn"
  }
};
