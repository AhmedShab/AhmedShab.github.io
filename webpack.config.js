var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/entry.js",

  output: {
    path: __dirname + "/src/",
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
