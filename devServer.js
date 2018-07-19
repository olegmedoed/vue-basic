"use strict";

const {
  PORT = 3000,
  HOST = "0.0.0.0",
  // WEBPACK_ENV = "dev"
} = process.env;

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
// const webpackConfig = require(`./webpack.config.${WEBPACK_ENV}`);
const webpackConfig = require(`./webpack.config`);

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  public: HOST,
  disableHostCheck: true,
  stats: {
    colors: true
  }
});
const devServer = new WebpackDevServer(compiler, devServerOptions);

devServer.listen(PORT, () => {
  console.log("Starting devServer on http://" + HOST + ":" + PORT);
});
