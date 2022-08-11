module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
          'module-resolver',
          {
              alias: {
                  '@Components': './src/components',
                  '@Screens': './src/screens',
                  '@Types': './src/types',
              }
          },
      ],
  ],
  };
};
