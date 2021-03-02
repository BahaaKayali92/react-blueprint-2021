const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, '../dist/pages');
const devServer = require('./dev-server');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: outputPath,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: devServer({
    outputPath,
  }),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: '.eslintrc',
            },
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
            options: {
              includePaths: [path.resolve(__dirname, '../../src/')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  resolve: {
    alias: {
      root: path.resolve(__dirname, '../../src/'),
    },
    extensions: ['.js', '.jsx', '.scss'],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 3000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        styles: {
          test: /\.scss$]/,
          chunks: 'all',
          minChunks: 2,
          minSize: 1000,
          priority: -10,
          reuseExistingChunk: true,
        },
        components: {
          test: /[\\/]src\/components\/[\\/]/,
          chunks: 'async',
          minChunks: 2,
          minSize: 3000,
          priority: -10,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minChunks: 2,
          minSize: 3000,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
