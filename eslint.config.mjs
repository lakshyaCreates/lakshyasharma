import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
<<<<<<< HEAD
        "no-unused-vars": "on"
    }
}
=======
      "no-unused-vars": "off",
    }
  }
>>>>>>> 326e5b83d3c0f9af68802fca50df67491200b250
];

export default eslintConfig;
