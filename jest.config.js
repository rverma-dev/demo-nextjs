const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

const config = {
    clearMocks: true,
    collectCoverage: true,
    coverageProvider: "v8",
    // moduleNameMapper: {},
    // preset: undefined,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    // transform: undefined,
};

module.exports = createJestConfig(config);
