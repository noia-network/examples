"use strict";
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
module.exports = config;
