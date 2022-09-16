const customJestConfig = {
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/', '/`pokedex-promise-v2'],
  moduleNameMapper: {
    "components/(.*)": "<rootDir>/components/$1",
    "styles/(.*)": "<rootDir>/styles/$1",
    "models/(.*)": "<rootDir>/models/$1",
    "hooks/(.*)": "<rootDir>/hooks/$1",
    "services/(.*)": "<rootDir>/services/$1",
  }
};

module.exports = customJestConfig;
