/** @type {import('webpack').Configuration} */
const path = require('path')
const HtmlWbepackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/index.js',
    output : 
    {
        path:  path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve : {
        extensions : ['.js']
    },
    module : {
        rules:[
                {
                    test: /\.m?js$/,
                    exclude : /node_modules/,
                    use :{
                        loader : 'babel-loader'
                    }
                },
                {
                    test: /\.css$/i,
                    use : [MiniCssExtractPlugin.loader, 'css-loader']
                }
        ]
    },
    plugins: [
        new HtmlWbepackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin()
        

    ]
    

}
