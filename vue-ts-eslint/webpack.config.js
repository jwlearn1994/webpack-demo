const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
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
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      context: path.join(__dirname, '.'),
      extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    }),
  ],
  devServer: {
    static: path.join(__dirname, '/'),
    client: {
      overlay: true,
    },
  },
  stats: 'errors-warnings'
}
