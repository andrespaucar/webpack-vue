const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const {HotModuleReplacementPlugin} = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports={
    entry: './src/main.js',
    output:{
        path : path.resolve(__dirname,'dist'),
        filename: 'bundle.[hash].js'
    },
    optimization:{
        splitChunks: {chunks: "all"}
    },
    devServer : {
        port: 4000,
        hot:  true,
        open: true,
        overlay:{
            warnings: true,
            errors: true,
        },
        historyApiFallback: true
    },
    resolve:{
        alias:{
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/')
        },
        extensions:['*','.js','.vue','.json'],
        
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader', 
            },
            {
                test: /\.css$/,
                oneOf: [
                  // this matches `<style module>`
                  {
                    resourceQuery: /module/,
                    use: [
                      'vue-style-loader',
                      {
                        loader: 'css-loader',
                        options: {
                          modules: true,
                          localIdentName: '[local]_[hash:base64:5]'
                        }
                      }
                    ]
                  },
                  // this matches plain `<style>` or `<style scoped>`
                  {
                    use: [
                      'vue-style-loader',
                      'css-loader'
                    ]
                  }
                ]
            },
            {
                test: /\.scss$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options:{
                            autoprefixer: {
                                browser:["last 2 versions"]
                            },
                            plugins:() =>[autoprefixer]
                        }
                    }, 'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/,
                use:[
                        {
                            loader:'file-loader',
                            options:{
                                name: '[folder]/[name].[hash].[ext]',
                                outputPath: 'assets/',
                                useRelativePath :true,
                                esModule:false
                          }
                    },
                    {
                        loader: 'image-webpack-loader', 
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                // test: /\.(woff(2)?|ttf|eot)(),
                // test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use:{
                    loader: "file-loader",
                    options:{
                        name: '[folder]/[hash].[ext]',
                        outputPath: 'assets/',
                        useRelativePath :true,
                        esModule: false
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            showErrors:true,
            cache: true,
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'./assets/css/app.[contenthash].css'
        }),
        
    ]
}