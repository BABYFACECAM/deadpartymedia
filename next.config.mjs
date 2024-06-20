/** @type {import('next').NextConfig} */
const { CONTENTFUL_SPACE_ID } = process.env;
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "y2pf5vl8vyp1ou8s.public.blob.vercel-storage.com/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
