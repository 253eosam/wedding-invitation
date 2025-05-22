import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const flatCompat = [
  // 기존 next.js 타입스크립트 config
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),

  // Prettier 설정 추가
  {
    name: "prettier",
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@next/next/no-img-element": "off",
    },
  },
];
export default flatCompat;
