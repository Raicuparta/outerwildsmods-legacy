const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    analyticsId: isProd ? 'UA-171434021-1' : undefined,
    isProd,
  };

  return {
    trailingSlash: true,
    env,
    images: {
      domains: [
        'github.com',
        'raw.githubusercontent.com',
        'user-images.githubusercontent.com',
        'img.shields.io',
      ],
    },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
        };
      }

      return config;
    },
  };
};
