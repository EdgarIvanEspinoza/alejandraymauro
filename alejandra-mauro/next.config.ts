import type { NextConfig } from "next";
import path from "path";

// Explicitly set Turbopack root to the project directory containing package.json.
// This helps when Next.js is accidentally started from the parent folder and infers /app incorrectly.
const nextConfig: NextConfig = {
  turbopack: {
    // Resolve to this config's directory (the project root with package.json)
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
