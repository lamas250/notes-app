module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@utils": "./src/utils",
            "@config": "./src/config",
            "@assets": "./assets",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@env": "./env",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
