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
      "#uicomponents": path.resolve(
        __dirname,
        "./src/components/common/UIComponents"
      ),
      "#navbar": path.resolve(__dirname, "./src/components/nav"),
      "#pages": path.resolve(__dirname, "./src/components/Pages"),
      "#home": path.resolve(__dirname, "./src/components/Pages/home/Home"),
      "#login": path.resolve(__dirname, "./src/components/Pages/login/Login"),
      "#list": path.resolve(__dirname, "./src/components/Pages/user/List"),
      "#new": path.resolve(__dirname, "./src/components/Pages/new/New"),
      "#singleUser": path.resolve(
        __dirname,
        "./src/components/Pages/single/singleuser"
      ),
      "#noMatch": path.resolve(
        __dirname,
        "./src/components/Pages/notFound/NotFound"
      ),
    },
  },
  plugins: [
    pluginRewriteAll(),
    react({
      include: "**/*.jsx",
    }),
  ],
});
