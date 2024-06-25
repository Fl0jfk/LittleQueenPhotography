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
                hostname: 'scontent-lhr8-1.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'scontent-lhr8-2.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'scontent-lhr6-2.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'scontent-lhr6-1.cdninstagram.com'
            },
            {
                protocol: 'https',
                hostname: 'd33wubrfki0l68.cloudfront.net'
            },
            {
                protocol: 'https',
                hostname: 'littlequeenphotography.s3.eu-west-3.amazonaws.com'
            },
            {
                protocol: "https",
                hostname: "scontent.cdninstagram.com",
            }
        ]
    }
}

module.exports = nextConfig
