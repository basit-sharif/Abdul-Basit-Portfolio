/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    API_KEY:"CLDiH_AooWoxIxPEYbSbRRTqDfHp3t2uI56RZhjhZGk",
    SPACE_ID:"8ct6eyn41e88",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
