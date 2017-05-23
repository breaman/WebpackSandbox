const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
    const mainConfig = {
        entry:
        {
            bundle: [
                './ClientApp/app.ts'
            ]
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'wwwroot/dist')
        },
        resolve: { extensions: ['.js', '.ts'] },
        module: {
            rules: [
                { test: /\.ts$/, include: /ClientApp/, use: ['awesome-typescript-loader?silent=true'] },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([{
                from: './ClientApp/index.html',
                to: path.resolve(__dirname, 'wwwroot')
            }])
        ]
    };

    return [mainConfig];
}