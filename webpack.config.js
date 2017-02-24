var webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/js/foundation.min.js",
        "./App/App.js"
    ],
    externals: {
        jquery: "jQuery"
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname)
        ],
        alias:{
            Main: "App/components/Main.js",
            Timer: "App/components/Timer.js",
            Countdown: "App/components/Countdown.js",
            Navbar: "App/components/Navbar.js",
            Clock: "App/components/Clock.js"
        },
        extensions: [" ", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ]
};
