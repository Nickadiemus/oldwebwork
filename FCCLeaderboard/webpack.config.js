module.exports = {
  entry: './src/index.js', //start
  output: {
    filename: "./build/bundle.js",  //end buildf ile
    sourceMapFilename: "./build/bundle.map"
  },
  devtool: "#source-map", //helps provide feedback for errors in browser devtool
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:/node_modules/
      }
    ]
  }
}
