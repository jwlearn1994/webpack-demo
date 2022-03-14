const path = require('path');

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
      }
    ]
  }
}
