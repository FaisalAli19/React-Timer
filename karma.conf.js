const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        browsers: ["Chrome"],
        singleRun: true,
        frameworks: ["mocha"],
        files: ["App/tests/**/*.test.js"],
        preprocessors: {
            "App/tests/**/*.test.js": ["webpack", "sourcemap"]
        },
        reporters: ["mocha"],
        client: {
            mocha: {
                timeout: "5000"
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    })
};
