/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // Enables styled-components
  },
  output: 'export', // Enables static export
};

module.exports = nextConfig;