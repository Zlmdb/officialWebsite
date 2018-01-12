//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
var webpack = require('webpack');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');
var path = require('path');


// 取得相应的页面路径，因为之前的配置，所以是pages文件夹
var PAGE_PATH = path.resolve(__dirname, './src/pages');
    //多入口配置
    //通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
    //那么就作为入口处理
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
                //excludeChunks:['a','c']
                inject: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }
            // if (process.env.NODE_ENV === 'production') {
            //     conf = merge(conf, {
            //         minify: {
            //             removeComments: true,
            //             collapseWhitespace: true,
            //             removeAttributeQuotes: true
            //         },
            //         chunksSortMode: 'dependency'
            //     })
            // }
        arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr
}

// var en=entries();
// var ht=htmlPlugin();
module.exports = { //注意这里是exports不是export
    //devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map
    //devtool: 'cheap-module-eval-source-map',
    devtool: 'cheap-module-source-map', //生产环境用
    //entry: __dirname + "/app/pages/qa/qa.js", //唯一入口文件，就像Java中的main方法
    //entry: { qa: __dirname + "/app/pages/qa/qa.js", aq: __dirname + "/app/pages/aq/aq.js" }, //唯一入口文件，就像Java中的main方法
    entry: entries(), //唯一入口文件，就像Java中的main方法
    output: { //输出目录
        path: __dirname + "/build", //打包后的js文件存放的地方
        // publicPath: '/',
        filename: "js/[name]-[chunkhash].js", //打包后的js文件名
        chunkFilename: '[name].[chunkhash].js'
        //publicPath:'/'
    },
    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.vue$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                include: path.resolve(__dirname, './src/'), //加了这个才会加快打包速度
                exclude: path.resolve(__dirname, './node_modules/'),
                loader: 'vue-loader' //loader的名称（必须）
            },
            {
                test: /\.js$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                include: path.resolve(__dirname, './src/'), //加了这个才会加快打包速度
                exclude: path.resolve(__dirname, './node_modules/'), //屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader' //loader的名称（必须）
            },
            {
                test: /\.css$/,
                //这个配置是可以运行的
                // loader: ExtractTextPlugin.extract('style-loader!css-loader?importLoaders=1!postcss-loader') //加importLoaders=1这个参数是为了让@import进来的css也自动加前缀
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader' //加importLoaders=1这个参数是为了让@import进来的css也自动加前缀
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less' //用less时，import进来的less不用加importLoaders=1这个参数了，less-loader自动处理了
            },
            {
                test: /\.sass$/,
                loader: 'style!css!postcss!sass'
            },
            {
                test: /\.styl$/,
                //loader: 'style!css!postcss!stylus'
                loader: 'style-loader!css-loader?!postcss-loader!stylus-loader'
            },
            // {
            //     test: /\.html$/,
            //     use: { loader: 'html-loader' }
            // },
            {
                test: /\.tpl$/,//.tpl是模板文件，更加语义化，也可以是以.ejs后缀的，这种文件export导出的是一个编译好的函数，在调用它的时候可以传参数。
                use: { loader: 'ejs-loader' }
            },
            // {
            //     test:/\.(png|jpg|gif|svg)$/i,
            //     loader:'file-loader',
            //     query:{
            //         name:'assets/[name]-[hash:5].[ext]'
            //     }
            // },
            {
                test: /\.(png|jpg|gif|svg)$/i,//加了i，就是不区分大小写
                loaders: [
                    'url-loader?name:assets/[name]-[hash:5].[ext]'//name属性里的assets是最终文件存放的位置
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
    // postcss: [
    //     require('autoprefixer')({
    //         broswer: ['last 5 versions']
    //     })
    // ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: false
        }),
        //但是现在又有一个问题了。你随便修改代码一处，例如Home.js，随便改变个字，你发现home.xxx.js名字变化的同时，
        //vendor.xxx.js名字也变了。这不行啊。这和没拆分不是一样一样了吗？我们本意是vendor.xxx.js名字永久不变，一直缓存在用户本地的。
        //官方文档推荐了一个插件HashedModuleIdsPlugin
        new webpack.HashedModuleIdsPlugin(),
        //现在你打包，修改代码再试试，是不是名字不变啦？错了，现在打包，我发现名字还是变了，经过比对文
        //档，我发现还要加一个runtime代码抽取，
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ].concat(htmlPlugin())
};