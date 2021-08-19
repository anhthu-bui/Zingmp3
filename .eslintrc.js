module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "import/no-duplicates": "off",
    "no-console": "off",
    "import/extensions": [
      "error",
      "never",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-unresolved": "off",
    "react/no-unescaped-entities": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
