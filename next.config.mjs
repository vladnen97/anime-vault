/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'shikimori.one',
                pathname: '**',
                protocol: 'https',
            },

        ],
    },
}

export default nextConfig;
