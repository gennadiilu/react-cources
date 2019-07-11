module.exports = {
  testMatch: ['**/*.test.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['src/.+/index.js', 'src/.+/.+Style.js'],
  coverageReporters: ['text-summary', 'json', 'html', 'lcovonly'],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40
    }
  },
  moduleNameMapper: {
    '^.+\\.(eot|otf|svg|ttf|woff|png)$': 'identity-obj-proxy'
  },
  setupFiles: ['./shim.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testURL: 'http://localhost/'
};
