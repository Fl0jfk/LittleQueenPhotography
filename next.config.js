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
            },
            {
                protocol: 'https',
                hostname: 'scontent-ams2-1.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'scontent-mrs2-1.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'scontent-ams4-1.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'd33wubrfki0l68.cloudfront.net'
            },
        ]
    }
}

module.exports = nextConfig
