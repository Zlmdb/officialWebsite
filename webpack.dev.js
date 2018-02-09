//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var express = require('express');
var glob = require('glob');
var path = require('path');
var hostName = "127.0.0.1";
var devPort = "3000";
var page = "things.html";
// var page = "solider.html";




// 取得相应的页面路径，因为之前的配置，所以是pages文件夹
var PAGE_PATH = path.resolve(__dirname, './src/pages')
    //通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
function entries() {
    var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
    var map = {}
    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map
}



//多页面输出配置
//与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
function htmlPlugin() {
    let entryHtml = glob.sync(PAGE_PATH + '/*/*.js') //这得到个数组
    let arr = []
    entryHtml.forEach((filePath) => {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        let conf = {
                // 模板来源
                template: './index.html',
                // 文件名称
                filename: filename + '.html',
                // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
                chunks: [filename],
                inject: true
            }
        arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr
}

// var en=entries();
// var ht=htmlPlugin();
module.exports = { //注意这里是exports不是export
    devtool: 'cheap-module-eval-source-map',
    entry: entries(), //唯一入口文件，就像Java中的main方法
    output: { //输出目录
        path: __dirname + "/build", //打包后的js文件存放的地方
        publicPath: '/',//js,css,img等资源对应的server目录
        filename: "[name].js" //打包后的js文件名
    },
    resolve: {  
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名  
        extensions: ['.js', '.jsx','.vue'],  
        alias: {  
            common: path.resolve(__dirname, './src/common')
        }  
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.vue$/,
        //         loader: 'eslint',
        //         exclude: /node_modules/
        //     },
        //     {
        //         test: /\.js$/,
        //         loader: 'eslint',
        //         exclude: /node_modules/
        //     }
        // ],
        //loaders加载器
        loaders: [{
            test: /\.vue$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            include: path.resolve(__dirname, './src/'), //加了这个才会加快打包速度
            exclude: path.resolve(__dirname, './node_modules/'),
            loader: 'vue-loader' //loader的名称（必须）
            
        },
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, './src/'), //加了这个才会加快打包速度
            exclude: path.resolve(__dirname, './node_modules/')
        },
            {
                test: /\.(tpl|ejs)$/,
                loader: 'ejs-loader',
                include: path.resolve(__dirname, './src/'), //加了这个才会加快打包速度
                exclude: path.resolve(__dirname, './node_modules/')
            },
        {
            test: /\.css$/,
             //这个配置是可以运行的
             // loader: ExtractTextPlugin.extract('style-loader!css-loader?importLoaders=1!postcss-loader')
            loader: 'style-loader!css-loader?importLoaders=1!postcss-loader' //加importLoaders=1这个参数是为了让@import进来的css也自动加前缀
        },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader' //用less时，import进来的less不用加importLoaders=1这个参数了，less-loader自动处理了
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!scss-loader'
            },
        // {
        //     test: /\.styl$/,
        //     loader: 'style-loader!css-loader?!postcss-loader!stylus-loader'
        // },
        {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                // 'postcss-loader?sourceMap:true',
                { loader: 'postcss-loader', options: { sourceMap: true } },//如果不这样配置postcss-loader,它的2.0.3及以上版本要报warning：(Previous source map found, but options.sourceMap isn't set)
                'stylus-loader'
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/i,//加了i，就是不区分大小写
            loaders: [
                'url-loader?limit=10000&name=assets/[name]-[hash:5].[ext]',//name属性里的assets是最终文件存放的位置
                // 'file-loader?name=assets/[name]-[hash:5].[ext]',
                //'image-webpack-loader'//这个是压缩图片的loader
            ]
        },
        {
            test:/\.(ttf|eot|woff|svg)$/,
            loader:'url-loader',
            query:{
                name:'assets/[name]-[hash:5].[ext]'
            }
        }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"development"'
        //     }
        // }),
        new FriendlyErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        //热替换,react-hot-loader要依赖这个插件
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://' + hostName + ':' + devPort + '/' + page //测试页面选择qa.html，可以自己更改
        })
    ].concat(htmlPlugin()),
    // .concat(htmlPlugin())
    devServer: {
        contentBase: './build', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        //colors: true,//在cmd终端中输出彩色日志
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //设置为true，当源文件改变时会自动刷新页面
        port: 3000 //设置默认监听端口，如果省略，默认为"8080"
            //process: true//显示合并代码进度
    }
};