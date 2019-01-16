"use strict";
const CompressionPlugin = require("compression-webpack-plugin");
Object.defineProperty(exports, "__esModule", { value: true });
const webpack = require("@simplrjs/webpack");
const config = webpack.generateWebpackConfig({
    emitHtml: true,
    projectDirectory: __dirname,
    entryFile: "./src/index.ts",
    outputDirectory: "dist",
    target: "web",
    devServerPort: 8888
});
module.exports = (env, argv) => {
    if (argv.mode === "production") {
        Object.assign(config.optimization, { usedExports: true });
        delete config.devtool;
        if (argv.compression === "gzip") {
            config.plugins.push(new CompressionPlugin());
        }
    }
    return config;
};
