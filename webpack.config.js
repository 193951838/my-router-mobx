
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootSrc = __dirname + '/src'

module.exports = {
  entry: rootSrc,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [".js", "html", "json"],
    alias: {
      "pages": rootSrc+ '/pages',
      "const": rootSrc + '/const',
      "router": rootSrc + '/router',
      "store": rootSrc+ '/store'
    }
  },
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
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-test-app',
      filename: "index.html",
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}