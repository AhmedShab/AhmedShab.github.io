var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: "./js/entry.js",

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs']
        }
      }
    ]
  }
};
