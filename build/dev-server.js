var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var file = require('./file');
var PROJECT_PATH = process.cwd();
var ip = require('ip');
var colors = require('colors');

var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing' ? require('./webpack.prod.conf') : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware


var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)



// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// 多页面路由
app.get('/*', function(req, res, next) {
    var filepath = path.join(compiler.outputPath, 'index.html');
    const fs = devMiddleware.fileSystem;
    devMiddleware.waitUntilValid(() => {
        res.set('content-type', 'text/html');
        res.end(fs.readFileSync(filepath))
    })
})

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err.red)
        return
    }
    //Server Started at ${server.info.protocol}:\/\/${ip.address()}:${PORT}
    var uri = `http://${ip.address()}:${port}`;
    console.log(`\n Server Started at http:\/\/${ip.address()}:${port}`.yellow);
    // opn(uri)
})
