module.exports = {
  preset: 'jest-expo',
  testMatch: ['**/__tests__/**/*.test.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-?expo|@react-native|react-native|expo(nent)?|@expo(nent)?/.*|expo-modules-core|react-navigation|@react-navigation/.*)/)',
  ],
};
