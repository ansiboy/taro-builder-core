const webpack = require('webpack');
let pkg = require("./package.json");
let license = `
 ${pkg.name} v${pkg.version}
`;
module.exports = {
    entry: __dirname + "/out/index.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        filename: "index.js", //打包后输出文件的文件名
        library: "taro-builder-core",
        libraryTarget: "umd",

    },
    mode: 'development',
    devtool: 'source-map',
    externals: [
        "react", "react-dom", "@tarojs/components"],
    plugins: [
        new webpack.BannerPlugin(license),
    ],
}