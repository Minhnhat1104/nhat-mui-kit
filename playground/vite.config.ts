import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, "");

  return {
    base: env.VITE_BASE_PATH,
    root: path.resolve(__dirname),
    plugins: [react()],
    publicDir: path.resolve(__dirname, "public"),
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "../src"),
        "@playground": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 5173,
      fs: {
        allow: [path.resolve(__dirname), path.resolve(__dirname, "../src")],
      },
    },
  };
});
