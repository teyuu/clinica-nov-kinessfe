/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname:'i.ibb.co'
        }], // Agrega el dominio de tu imagen aquí
    },
}

module.exports = nextConfig
