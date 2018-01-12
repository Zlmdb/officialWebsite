var React = require('react');
var ReactDom = require('react-dom');
// var QuestionApp = require('./components/QuestionApp.js');
import Common from './components/common.js'
import 'common/reset.css'

var deviceWidth = document.documentElement.clientWidth;
// if (deviceWidth > 640) deviceWidth = 640;
document.documentElement.style.fontSize = deviceWidth / 10 + 'px';

var mainCom = ReactDom.render(<
    Common />,
    document.getElementById('app')
)


// import Head from 'common/html/head.js';
// const dom = document.getElementById('app');
// const head = new Head();//一个函数
// dom.innerHTML  = head.tpl({ //此时lay.tpl是一个函数，函数执行并传参
//     name: 'jeson',
//     arr: ['首页', '产品', '服务体系', '应用下载', '关于我们', '登录']
// });