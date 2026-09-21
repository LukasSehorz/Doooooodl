import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ohne feste Wurzel greift Turbopack auf eine package-lock.json im
  // Benutzerverzeichnis zu, die nicht zu diesem Projekt gehört.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
