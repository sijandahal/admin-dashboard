import { defineConfig } from "vite";
import pluginRewriteAll from "vite-plugin-rewrite-all";

import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "#uicomponents": path.resolve(
        __dirname,
        "./src/components/common/UIComponents"
      ),
      "#container": path.resolve(
        __dirname,
        "./src/components/common/Container"
      ),

      "#src": path.resolve(__dirname, "./src/"),
      "#routes": path.resolve(__dirname, "./src/app/routes"),
      "#navbar": path.resolve(__dirname, "./src/components/nav"),
    },
  },
  plugins: [
    pluginRewriteAll(),
    react({
      include: "**/*.jsx",
    }),
  ],
});
