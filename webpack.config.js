const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    library: 'helloWorld',  // This exposes your functions globally
    libraryTarget: 'window', // Ensures the global object is available
    path: path.resolve(__dirname, './dist/hello-world'),
    filename: 'main.js'
  },
  mode: 'production' // Change to 'production' for deployment
};
