module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    collectCoverage: true,
    coverageDirectory: 'tests/coverage',
    coverageReporters: ['text', 'lcov', 'json'],
    testMatch: ['**/*.test.ts'],
    globals: {
      'ts-jest': {
        isolatedModules: true
      }
    },
    setupFiles: ['dotenv/config']
  };  