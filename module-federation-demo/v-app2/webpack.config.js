const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      filename: 'remoteEntry.js',
      exposes: [{
        './App': './src/App2.vue',
      }],
      shared: {
        vue: {
          singleton: true
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
