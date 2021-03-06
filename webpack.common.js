const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: true,
  }),
];

plugins.push(
  new HtmlWebpackPlugin({
    template: `./src/demo/demo.html`,
    filename: `index.html`,
    minify: false
  }),
  // new webpack.ProvidePlugin({
  //   $: 'jquery',
  //   jQuery: 'jquery',
  //   'window.jQuery': 'jquery',
  //   'window.$': 'jquery',
  // }),
);

module.exports = {
  mode: 'development',
  entry: {
    index: './src/demo/DemoSlider.ts',
    Slider: './src/Slider.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: "my-library",
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // alias: {
    //   images: path.resolve(__dirname, 'src/assets/img/'),
    // },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        index: {
          type: "css/mini-extract",
          name: "index",
          chunks: (chunk) => {
            return chunk.name === "index";
          },          enforce: true,
        },
        Slider: {
          type: "css/mini-extract",
          name: "Slider",
          chunks: (chunk) => {
            return chunk.name === "Slider";
          },
          enforce: true,
        },
      },
    },
  },

  plugins: plugins,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { exclude: ['proposal-dynamic-import'] },
                '@babel/preset-typescript',
              ],
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/(node_modules)/],
      },
      {
        test: /\.css$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
      // {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //     type: 'asset/resource',
      // },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          }, // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    port: 9000,
  },
};
