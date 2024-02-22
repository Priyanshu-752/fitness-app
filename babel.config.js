module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Remove the deprecated expo-router/babel preset
      "nativewind/babel",
      'react-native-reanimated/plugin'
    ],
  };
};
