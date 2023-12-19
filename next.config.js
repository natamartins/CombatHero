/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net'
            }
        ],
        minimumCacheTTL: 1500000,
    },
}

module.exports = nextConfig
