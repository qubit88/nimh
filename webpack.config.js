const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "script.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        //exclude: /index\.html$/, //without this HtmlWebPackPlugin will not work with template file correctly
        include: path.join(__dirname, "src/html"),
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              interpolate: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              ident: "postcss",
              plugins: () => [require("autoprefixer")()]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/"
          }
        }
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/"
          }
        }
      },
      {
        test: /\.(glb|gltf|bin)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/"
          }
        }
      },
      {
        test: /\.ico$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Title",
      template: "./src/html/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      title: "Title",
      template: "./src/html/404.html",
      filename: "./404.html"
    }),
    new HtmlWebPackPlugin({
      title: "Title",
      template: "./src/html/not_found.html",
      filename: "./not_found.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
    // new WebpackPwaManifest({
    //   name: 'tesla',
    //   description: 'etcetera is a design studio',
    //   orientation: "omit",
    //   ios: {
    //     'apple-mobile-web-app-status-bar-style': 'black-translucent'
    //   },
    //   icons: [
    //     {
    //       src: path.resolve('src/img/icon.png'),
    //       sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
    //       ios: true
    //     }
    //   ]
    // })
    // new BundleAnalyzerPlugin({ generateStatsFile: true })
  ]
};
