/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'img.icons8.com',
                // Additional configuration options if needed
            },
            {
                hostname: 'cdn-icons-png.flaticon.com',
                // Additional configuration options if needed
            },
            {
                hostname: 'i.pinimg.com',
                // Additional configuration options if needed
            },
            {
                hostname: 'www.freeiconspng.com',
                // Additional configuration options if needed
            },
            {
                hostname: 'cdn3d.iconscout.com',
                // Additional configuration options if needed
            }
        ],
    },
};

export default nextConfig;
