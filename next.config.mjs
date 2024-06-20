/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "y2pf5vl8vyp1ou8s.public.blob.vercel-storage.com/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
