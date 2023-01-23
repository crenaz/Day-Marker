var HtmlWebpackPlugin = require("html-webpack-plugin");
use: ["style-loader", "css-loader"];

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/assets/index.html",
    }),
  ],
};