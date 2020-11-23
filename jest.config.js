module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
      ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '<rootDir>/src/tests/*.test.js'
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  };