import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is the standard Vite config for a React project.
// It just tells Vite to use the React plugin.
export default defineConfig({
  plugins: [react()],
});
