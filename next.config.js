/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats : ['image/webp'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.cdninstagram.com",
                port: "",
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
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            }
        ]
    }
}

module.exports = nextConfig
