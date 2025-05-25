import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./app/setupTests.ts",
    globals: true,
    reporters: ["default", "html"],
    outputFile: {
      html: "./docs/test-report/index.html",
    },
  },
  plugins: [react(), tsconfigPaths()],
});
