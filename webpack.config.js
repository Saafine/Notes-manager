// Configuration options at => https://webpack.github.io/docs/configuration.html
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// development equals TRUE if environment variable is a string set to "development"
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

let plugins = [
  new HtmlWebpackPlugin(
    {
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true
      // chunks: ['app'] // specifies which .js files to bundle
    }
  )
];

// !update, check if it works in production
if (PRODUCTION) {
  console.log('I SHOULD BE IN PRODUCTION');
  plugins.push(new UglifyJSPlugin());
  plugins.push(new ExtractTextPlugin('style-[contenthash:10].css'));
} else {
  console.log('I SHOULD BE IN DEV'); // !todo fix me
}

// !update, check if it works in production
const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';
const cssLoader = PRODUCTION
  ? ExtractTextPlugin.extract({
    loader: 'css-loader?minimize&localIdentName=' + cssIdentifier
  })
  : ['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    'babel-polyfill', // this is required for redux-saga to work
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: { // presets for babel
          presets: ['react', 'es2015', 'stage-2'], // taken from packages.json
          plugins: ['react-html-attrs'] // change className into class
        }
        // exclude: /node_modules/
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/, // woff, eot, ttf, svg is neccessary to later include fontawesome
        loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loaders: cssLoader,
        exclude: /node_modules/
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      }]
  },
  devServer: {
    historyApiFallback: true, // 404 fallback -> redirect to root if path not found
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    }
  },
  plugins: plugins
};