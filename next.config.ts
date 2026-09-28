import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server is opened at 127.0.0.1. Next blocks those asset requests
  // unless this host is listed.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
