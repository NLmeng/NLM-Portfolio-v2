/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/api/resumepdf",
      },
    ];
  },
};

export default nextConfig;
