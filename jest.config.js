module.exports = {
  globals: {
    "ts-jest": {
      skipBabel: true,
    },
  },
  mapCoverage: true,
  moduleFileExtensions: ["js", "ts"],
  testResultsProcessor: "jest-sonar-reporter",
  transform: {
    "^.+\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  }
};