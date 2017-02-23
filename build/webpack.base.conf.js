var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var striptags = require('./strip-tags');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        index: ['./src/index.js'],
        vendor: ['vue']
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', 'scss', 'css'],
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.js'),
            'assets': path.join(__dirname, '../src/resource')
        }
    },
    module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
          }
        ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, 
        {
            test: /\.css$/,
            // loader: "style-loader!css-loader?root=."
            loader: ExtractTextPlugin.extract("style", "css", "postcss")
        }, 
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", 'css!sass')
        }, 
        {
            test: /\.(png|jpe?g|gif|svg|cur)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 30000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 30000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    vue: {
      loaders: {
        js: 'babel-loader',
        sass: ExtractTextPlugin.extract('vue-style-loader', 'css!sass')
      }
    },
    eslint: {
      configFile: './.eslintrc'
    }
}
