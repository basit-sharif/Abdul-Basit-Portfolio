/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_KEY: "CLDiH_AooWoxIxPEYbSbRRTqDfHp3t2uI56RZhjhZGk",
    SPACE_ID: "8ct6eyn41e88",
    EMAIL_JS_PUBLIC_KEY: "S29CKO56YxwtT0GSF",
    EMAIL_JS_SERVIES_ID: "service_ledzw74",
    EMAIL_JS_TEMPLETE_ID:"template_orcnisd"
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
