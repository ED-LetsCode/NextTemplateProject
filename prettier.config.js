// prettier.config.js
module.exports = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "",
    "^(next/(.*)$)|^(next$)",
    "",
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "",
    "^@/types/*", // Type imports
    "",
    "^@/app/*", // App imports
    "",
    "^@/components/ui/*", // Component imports
    "^@/components/*", // Component imports
    "",
    "^@/hooks/*", // Hook imports
    "",
    "^@/lib/db/*", // Database imports
    "^@/lib/validators", // Database imports
    "^@/lib/*", // Library imports
    "",
    "^@/styles/*", // Style imports
    "",
    "^@prisma/*", // Prisma imports
    "",
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
  ],
};
