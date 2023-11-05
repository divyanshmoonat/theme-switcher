module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "eslint:recommended", // Basic ESLint rules
        "plugin:react/recommended", // React-specific rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
        "plugin:react-hooks/recommended", // React Hooks rules
    ],
    plugins: ["react", "jsx-a11y", "react-hooks"],
    rules: {
        // General ESLint Rules
        "no-console": "warn",
        "no-unused-vars": "warn",
        "no-undef": "error",
        "no-use-before-define": "error",

        // React Rules
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/prop-types": "off", // You may choose to enable this for prop type checking
        "react/react-in-jsx-scope": "off", // Only enable if you're not using React 17's automatic imports

        // JSX-a11y Rules
        "jsx-a11y/anchor-is-valid": "warn",
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/no-static-element-interactions": "warn",
        "jsx-a11y/label-has-associated-control": "warn",

        // React Hooks Rules
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "indent": ["error", 2]
    },
};
