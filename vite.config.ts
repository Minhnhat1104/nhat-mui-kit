import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, tsconfigPath: "./tsconfig.build.json" }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        components: path.resolve(__dirname, "src/components/index.ts"),
        utils: path.resolve(__dirname, "src/utils/index.ts"),
        constants: path.resolve(__dirname, "src/constants/index.ts"),
      },

      name: "NhatMuiKit",
      formats: ["es"],
      // es: import { Button } from "your-lib";
      // umd: <script src="your-lib.umd.js"></script>
      fileName: (format) => `minhnhat1104-mui-kit.${format}.js`,
    },
    rollupOptions: {
      external: [
        "@emotion/react",
        "@emotion/styled",
        "@hanbiro/signer-core",
        "@mui/icons-material",
        "@mui/material",
        "lodash",
        "react",
        "react-dom",
        "react-feather",
      ],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },

        entryFileNames: (chunk) => {
          if (chunk.name === "components") return "components/index.js";
          if (chunk.name === "utils") return "utils/index.js";
          return "[name].js";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@playground": path.resolve(__dirname, "./playground"),
    },
  },
});
