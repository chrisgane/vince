module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },

    extends: [
        "plugin:prettier/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "next",
    ],
    root: true,
    rules: {
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "react/prop-types": 0,
        "no-unused-vars": "warn",
    },
    plugins: ["react-hooks"],
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
