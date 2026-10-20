import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH;

export default defineConfig({
  plugins: [
    tanstackStart({
      router: {
        basepath: githubPagesBasePath ?? "/",
      },
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  base: githubPagesBasePath ? `${githubPagesBasePath}/` : "./",
  build: {
    outDir: "dist",
  },
});
