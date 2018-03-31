const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './frontend/index'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: [
              'transform-object-rest-spread',
              'transform-class-properties',
              'transform-decorators-legacy',
            ]
          }
        }
      },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      '~': path.resolve(__dirname, 'frontend')
    }
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    })
  ]
};
