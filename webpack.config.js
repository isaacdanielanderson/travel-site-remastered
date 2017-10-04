var path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"), // path.resolve() generates an absolute path to this directory
        filename: "App.js"
    }
}