module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],      
    testMatch: ["**/+(*.)+(spec|test).ts"],    
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.spec.json",
        isolatedModules: true,
      },
    },
  };
  