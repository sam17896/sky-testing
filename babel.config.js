module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@constant': './src/constant',
          '@features': './src/features',
          '@utils': './src/utils',
          '@stacks': './src/stacks',
          '@hooks': './src/hooks',
          '@providers': './src/providers',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
