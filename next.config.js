/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 13.4 accepte n'importe quelle qualité de 1 à 100 (`qualities` n'arrive
    // qu'en 14.2) : chaque image × largeur ouvrait 100 variantes sur le quota Hobby
    // de 5 000 transformations par mois. Les 4 images pèsent 340 Ko en tout,
    // servies telles quelles : zéro transformation, plus de /_next/image.
    unoptimized: true,
  },
}

module.exports = nextConfig
