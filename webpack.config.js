var webpack = require("webpack");

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
