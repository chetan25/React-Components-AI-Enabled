import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  // base: ".",
  plugins: [react(), libInjectCss()],
  build: {
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
    lib: {
      entry: {
        summarize: resolve(
          __dirname,
          "./src/components/Summarize/summarize.tsx"
        ),
        sentimentAnalysis: resolve(
          __dirname,
          "./src/components/SentimentAnalysis/useSentimentAnalysis.ts"
        ),
      },

      formats: ["es"],
    },
  },
});
