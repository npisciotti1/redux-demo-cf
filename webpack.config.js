'use strict'

require('dotenv').config({path: `${__dirname}/.env`});

//simple boolean to check if production.
const production = process.env.NODE_ENV === 'production';

//These are two native plugins to webpack, DefinePlugin allows us to create
//global variables, EnvironmentPlugin is similar but allows us to format them
//like: process.env.MY_VAR
const {DefinePlugin, EnvironmentPlugin} = require('webpack');

//creates an html file, typically our template
const HTMLPlugin = require('html-webpack-plugin');

//For production, this will 'overwrite' any built bundles that exist
//upon building a new bundle, unfortunately this doesnt happen natively.
const CleanPlugin = require('clean-webpack-plugin');

//For production, obfuscates code in build
const UglifyPlugin = require('uglifyjs-webpack-plugin');

//For extracting and bundling our css
const ExtractPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle-[hash].css'),
  new HTMLPlugin({template: `${__dirname}/src/index.html`}),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
  }),
];

//A check to see if we're shipping to production, adds two plugins to the plugins array
if (production)
  plugins = plugins.concat([ new CleanPlugin(), new UglifyPlugin() ]);

module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  devServer: { historyApiFallback: true },
  devtool: production ? undefined : 'cheap-module-eval-source-map',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: process.env.CDN_URL,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 60000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp3|aac|aiff|wav|flac|m4a|ogg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'audio/[name].[ext]' },
          },
        ],
      },
    ],
  },
};
