const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv({
      path: "./.env",
    }),
  ],
  devServer: {
    // port: 3000,
    port: 8080,
    // proxy: {
    //   "/api/": {
    //     target: "http://183.99.247.17:8881",
    //     changeOrigin: true,
    //   },
    // },
    historyApiFallback: true,
  },
};
