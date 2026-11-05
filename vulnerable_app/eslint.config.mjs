import security from "eslint-plugin-security";

export default [
    {
        files: ["**/*.js"],
        plugins: {
            security
        },
        rules: {
           "security/detect-eval-with-expression": "warn",
            "security/detect-non-literal-regexp": "warn",
            "security/detect-unsafe-regex": "warn",
            "security/detect-object-injection": "warn"
        }
    }
];