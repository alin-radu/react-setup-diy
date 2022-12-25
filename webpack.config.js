const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');

// loaders
const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [['postcss-preset-env', {}]],
    },
  },
};

const cssLoader = {
  loader: 'css-loader',
};

const sassLoader = {
  loader: 'sass-loader',
};

const styleLoader = MiniCssExtractPlugin.loader;

const cssLoaders = {
  test: /\.(css)$/i,
  use: [styleLoader, cssLoader, postCssLoader],
};

const sassLoaders = {
  test: /.s[ac]ss$/i,
  use: [styleLoader, cssLoader, postCssLoader, sassLoader],
};

const imageLoaders = {
  test: /\.(jpg|png|jpeg|gif|ico)$/,
  type: 'asset/resource',
};

const babelLoader = {
  test: /\.(js|jsx)$/,
  include: path.resolve(__dirname, 'src'),
  exclude: path.resolve(__dirname, 'node_modules'),
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: 'defaults',
            },
          ],
          '@babel/preset-react',
        ],
      },
    },
    {
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    },
  ],
};

// plugins
const htmlWebpackPluginInstances = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
  }),
];

const miniCssExtractPluginInstance = new MiniCssExtractPlugin();

const esLintPluginInstance = new EsLintPlugin();

// configObj
const configObj = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  plugins: [
    ...htmlWebpackPluginInstances,
    esLintPluginInstance,
    miniCssExtractPluginInstance,
  ],
  module: {
    rules: [babelLoader, cssLoaders, sassLoaders, imageLoaders],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = configObj;
