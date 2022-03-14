const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, '/'),
  },
}
