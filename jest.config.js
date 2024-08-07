<<<<<<< HEAD
module.exports = {
    coverageDirectory: './coverage',
    collectCoverageFrom: [
      '**/src/**/*.js',
      '!**/__tests__/**',
      '!**/node_modules/**',
    ],
    coverageThreshold: {
      global: {
        statements: 10,
        branches: 10,
        functions: 10,
        lines: 10,
      },
    },
    projects: ['./client', './server'],
=======
module.exports = {
    coverageDirectory: './coverage',
    collectCoverageFrom: [
      '**/src/**/*.js',
      '!**/__tests__/**',
      '!**/node_modules/**',
    ],
    coverageThreshold: {
      global: {
        statements: 10,
        branches: 10,
        functions: 10,
        lines: 10,
      },
    },
    projects: ['./client', './server'],
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
  }