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
      domains: ['github.com', 'raw.githubusercontent.com'],
    },
  };
};
