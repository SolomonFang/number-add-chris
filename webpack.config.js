
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        'number-add-chris': './src/index.js',
        'number-add-chris.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'numberAddChris',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    mode: 'none',
    optimization:{
        minimize:true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    }
}