import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(root, "components"),
      "@constants": resolve(root, "constants"),
      "@hooks": resolve(root, "hooks"),
      "@layouts": resolve(root, "layouts"),
      "@pages": resolve(root, "pages"),
      "@router": resolve(root, "router"),
      "@utils": resolve(root, "utils"),
      "@money-tracker-types": resolve(root, "types"),
    },
  },
});
