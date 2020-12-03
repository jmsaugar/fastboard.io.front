const { join } = require('path');

module.exports = {
  webpack : (config) => {
    // Alias
    config.resolve = {
      ...config.resolve,
      alias : {
        '#components' : join(__dirname, 'src', 'components'),
        '#constants'  : join(__dirname, 'src', 'constants'),
        '#hooks'      : join(__dirname, 'src', 'hooks'),
        '#init'       : join(__dirname, 'src', 'init'),
        '#layouts'    : join(__dirname, 'src', 'layouts'),
        '#pages'      : join(__dirname, 'src', 'pages'),
        '#routes'     : join(__dirname, 'src', 'routes'),
        '#services'   : join(__dirname, 'src', 'services'),
        '#store'      : join(__dirname, 'src', 'store'),
        '#theme'      : join(__dirname, 'src', 'theme'),
        '#utils'      : join(__dirname, 'src', 'utils'),
      },
    };

    /**
     * Force custom cursor images to be loaded as inline base64
     * images instead of being fetched through the network as
     * a regular file for a better performance when first used.
     */
    const exclusiveLoaders = config.module.rules.find((r) => r.oneOf);
    exclusiveLoaders.oneOf = [
      {
        test : /theme\/images\/cursors\/.+\.svg/,
        use  : 'url-loader',
      },
      ...exclusiveLoaders.oneOf,
    ];

    return config;
  },
};
