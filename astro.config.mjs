import { defineConfig } from "astro/config";
import { lifecycleLogs } from "src/integrations/lifecycle-logs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), lifecycleLogs()],
});
