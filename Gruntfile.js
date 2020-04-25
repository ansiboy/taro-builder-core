//==========================================================================================
// 修改版本号
function modifyVersion() {
    const package = require("./package.json");

    let version = package.version || "1.0.0";
    let arr = version.split(".");
    arr[arr.length - 1] = (Number.parseInt(arr[arr.length - 1]) + 1).toString();
    version = arr.join(".");
    package.version = version;

    const fs = require('fs');
    let data = JSON.stringify(package, null, 4);
    fs.writeFileSync("package.json", data, "utf8");
};
modifyVersion();
//==========================================================================================

const webpack_es6 = require('./webpack.config.js');

let webpack_es6_min = Object.assign({}, webpack_es6, {
    output: Object.assign({}, webpack_es6.output, { filename: "index.min.js" }),
    mode: 'production',
})

//==========================================================================================

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        shell: {
            src: {
                command: `tsc -p src`
            }
        },
        webpack: {
            es6: webpack_es6,
            es6_min: webpack_es6_min,
        },
    })

    grunt.registerTask('default', ['shell', "webpack"]);
}
