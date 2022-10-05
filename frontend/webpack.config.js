const path = require('path')
// console.log("===========================================================================")
// Origionaly this
// output: path.join(__dirname, './public')
// devmiddleware/publicpath: path.join(__dirname, './public/bundle.js')
// Changed to this
// console.log(path.join(__dirname, '../backend/public'))
// console.log("===========================================================================")

module.exports = {
  mode: 'development',
  entry: ['./client/index.js'],  
  output: {
    path: path.join(__dirname, '../backend/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: "0.0.0.0",
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: path.join(__dirname, '../backend/public/bundle.js'),
      serverSideRender: true,
      writeToDisk: (filePath) => {
        return !/hot-update/i.test(filePath);
      },
    },
    historyApiFallback: true
    // watchFiles: [
    //   path.join(__dirname, './public/bundle.js'),
    //   path.join(__dirname, '../backend/app.py'),
    // ],
  },
  module: {
    rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],      
  },
  plugins: [],
}