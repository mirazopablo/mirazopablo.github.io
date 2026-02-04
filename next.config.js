/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
}

export default nextConfig
