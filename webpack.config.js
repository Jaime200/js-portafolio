/** @type {import('webpack').Configuration} */
const path = require('path')
const HtmlWbepackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output : 
    {
        path:  path.resolve(__dirname,'dist'),
        filename: 'main.js',
        assetModuleFilename: 'assets/[hash][ext][query]'
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
                    test: /\.css|styl$/i,
                    use : [MiniCssExtractPlugin.loader, 
                        'css-loader', 
                        'stylus-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename : 'asset/images/[hash][ext][query]',
                      }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                       generator: {
                           filename: "assets/fonts/[hash][ext][query]",
                       },
                }    
        ]
    },
    plugins: [
        new HtmlWbepackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns : [
                {
                    from: path.resolve(__dirname,'src','assets','images'),
                    to:'assets/images',
                }
            ]
        })
        

    ]
    

}
