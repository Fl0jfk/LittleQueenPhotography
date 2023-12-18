/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent-cdg4-3.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'scontent-cdg4-1.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'scontent-cdg4-2.cdninstagram.com'
            }
        ]
    }
}

module.exports = nextConfig
