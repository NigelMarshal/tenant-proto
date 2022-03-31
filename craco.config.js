const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@heading-color": "#808080",
              "@table-header-color": "#1DA57A",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
