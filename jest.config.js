module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(s?css|less)$': '<rootDir>/pages/index.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/pages/index.js',
  },
  setupFiles: [
    '<rootDir>/tests/setup.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupAfterEnv.js',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/tests/',
    '/coverage/'
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native)",
"node_modules/?!(react-navigation)"
],
  transform: {
    '^.+\\.js$': 'babel-jest',
}
};