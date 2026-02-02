import type { Config } from "prettier";

const config: Config = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
