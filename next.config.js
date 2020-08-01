const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    analyticsId: isProd ? 'UA-171434021-1' : undefined,
    isProd,
  };

  return {
    exportTrailingSlash: true,
    trailingSlash: true,
    env,
  };
};
