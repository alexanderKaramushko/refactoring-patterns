module.exports = {
  env: {
    browser: true,
  },
  extends: [
    require.resolve("eslint-config-airbnb"),
    require.resolve("eslint-config-airbnb/hooks"),
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        vars: "all",
        ignoreRestSiblings: false,
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "block-like",
      },
      {
        blankLine: "always",
        prev: "block-like",
        next: "*",
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: ['block-like', 'expression']
      },
    ],
    "object-property-newline": "error",
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: true,
        natural: false,
      },
    ],
    "object-curly-newline": [
      "error",
      {
        ObjectPattern: {
          multiline: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "padded-blocks": [
      "error",
      {
        classes: "always",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        json: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "linebreak-style": ["error", "windows"],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    "no-console": "error",
    "no-debugger": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    quotes: ["error", "single"],
  },
  settings: {
    "import/extensions": [".ts", ".tsx", ".json"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".json"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  overrides: [
    {
      "files": ["src/**/*.test.ts", "src/**/*.test.tsx"],
      "plugins": ["jest", "jest-formatting", "testing-library"],
      "extends": [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
      ],
      "rules": {}
    }
  ],
};
