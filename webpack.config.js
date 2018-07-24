const p = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const { PORT = 3000 } = process.env;

module.exports = {
  name: "client",
  mode: "development",
  entry: [
    `webpack-dev-server/client?http://0.0.0.0:${PORT}`,
    "webpack/hot/only-dev-server",
    __dirname + "/src/index.ts",
  ],
  devtool: "cheap-module-source-map",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }],
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue/,
        use: ["vue-loader"],
      },
      {
        test: /\.pug$/,
        use: ["pug-plain-loader"],
      },
      {
        test: /\.(png|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),

    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      watch: ["./src"],
      vue: true,
    }),

    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".vue", ".ts", ".js"],
    alias: {
      "@": p.resolve("src"),
    },
  },
};
