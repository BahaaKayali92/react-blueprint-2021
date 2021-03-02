const config = (settings) => {
  const opt = settings || {};

  return {
    contentBase: opt.outputPath,
    port: 9000,
    host: 'localhost',
    https: true,
    // notify in case of errors
    overlay: {
      warnings: false,
      errors: true,
    },
    hot: true,
    disableHostCheck: true,
    progress: true,
  };
};

module.exports = config;
