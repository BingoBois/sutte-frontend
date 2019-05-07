module.exports = {
    "preset": "jest-puppeteer",
    "moduleNameMapper": {
      "\\.(css)$": "jest-css-modules"
    },
    "transform": {
      "\\.(ts|tsx)$": "ts-jest"
    },
    "testRegex": ".test.(ts|tsx?)$",
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
    "coverageDirectory": "coverage",
    "collectCoverageFrom": [
        "src/**/*.{ts,js}",
        "!src/**/*.d.ts"
    ],
    "coverageReporters": [
        "json-summary",
        "text",
        "lcov"
      ],
    "collectCoverage": true
  };