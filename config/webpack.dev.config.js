/*  eslint-disable  */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "cheap-module-source-map",
  output: {
    filename: 'public/[name].bundle.js',
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            }
          },
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
        ]
      },
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
      minify: false,
      favicon: './src/favicon.ico'
    })
  ]
};
