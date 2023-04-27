const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: {
    extensions: [".jsx", "..."],
  },

  devServer: {
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  devServer: {
    historyApiFallback: true,
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
