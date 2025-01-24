import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

process.env.NODE_ENV = 'development'; // bable plugin knows its running in development mode!

module.exports = {
    mode: 'development',
    target: 'web',
    devTool: 'cheap-module-source-map', // for debugging, will allow us to see original code
    entry: './src/',
    output: { //what files to serve
        path: path.resolve(__dirname, "build"),
        publicPath: '/', // what shows in public url
        filename: 'bundle.js', // so that html can reference bundle being served from memory
    },
    stats: 'minimal',
    devServer: {
        historyApiFallback: true, // All requests handled by index.hmtl
        headers: {'Access-Control-Allow-Origin': "*"},
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'src/main.tsx',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/, // look only for js, jsx, and tsx files
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /(\.css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }

}
