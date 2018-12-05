const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const BomPlugin = require('webpack-utf8-bom');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public/dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['public/dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/EnLearning.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BomPlugin(true)
  ],
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }
};
