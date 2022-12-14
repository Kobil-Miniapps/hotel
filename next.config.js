const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withPreact = require("next-plugin-preact");

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: false,
  env: {
    /* host: "http://test:3000", */
    api: "https://araboxminiappapi.westerops.com/",
    miniappName: "Hotel",
    host: "https://neom-tickets.web.app",
    openidHost: "https://idp.arabox-test.westerops.com/auth/realms/",
  },
};
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        inlineImageLimit: 8192,
        handleImages: ["jpeg", "png", "webp", "gif"],
        optimizeImages: true,
        optimizeImagesInDev: true,
        defaultImageLoader: "responsive-loader",
        responsive: {
          test: /\.(jpe?g|png|webp)$/i,
          adapter: require("responsive-loader/sharp"),
          sizes: [360, 480, 600, 720],
          quality: 90,
        },
        mozjpeg: {
          quality: 75,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        svgo: {
          // enable/disable svgo plugins here
        },
        webp: {
          preset: "default",
          quality: 70,
        },
      },
    ],
    withPreact,
  ],
  nextConfig
);
