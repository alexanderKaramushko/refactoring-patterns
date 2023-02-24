module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  moduleNameMapper: {
    '^client/(.*)': '<rootDir>/client/src/$1',
    '^server/(.*)': '<rootDir>/server/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.(scss)$': '<rootDir>/jest/__mocks__/styleMock.js',
    'env': '<rootDir>/jest/__mocks__/envMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setup.js"],
};
