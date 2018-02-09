var React = require('react');
var ReactDom = require('react-dom');
// var QuestionApp = require('./components/QuestionApp.js');
import Centercon from './components/centerCon.js'
import Header from 'common/components/head.js'
import Footer from 'common/components/Footer.js'
import 'common/reset.css'
import './things.styl'

class Common extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            arrObj:[
                { src: require('./images/1.png'), title: '预约评价', detail1: { title: '1、提前预约', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }, detail2: { title: '2、匿名评价', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }},
                { src: require('./images/2.png'), title: '预约评价', detail1: { title: '1、提前预约', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }, detail2: { title: '2、匿名评价', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }},
                { src: require('./images/3.png'), title: '预约评价', detail1: { title: '1、提前预约', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }, detail2: { title: '2、匿名评价', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }},
                { src: require('./images/4.png'), title: '预约评价', detail1: { title: '1、提前预约', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }, detail2: { title: '2、匿名评价', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }},
                { src: require('./images/5.png'), title: '预约评价', detail1: { title: '1、提前预约', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }, detail2: { title: '2、匿名评价', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }},
                { src: require('./images/6.png'), title: '预约评价', detail1: { title: '1、提前预约', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }, detail2: { title: '2、匿名评价', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }},
                { src: require('./images/7.png'), title: '预约评价', detail1: { title: '1、提前预约', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }, detail2: { title: '2、匿名评价', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }},
                { src: require('./images/8.png'), title: '预约评价', detail1: { title: '1、提前预约', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }, detail2: { title: '2、匿名评价', content: '自从詹姆斯重返骑士队以来，外界很容易产生这种' }},
            ]
        }
    }
    render() {
        let ItemNodes = this.state.arrObj.map((item, idx) => {
            return <Centercon data={item} key={'item' + idx} />;
        })
        return (
            <div>
                <Header/>
                {/* <div> */}
                    {ItemNodes}
                {/* </div> */}
                <Footer/>
            </div>
        )
    }
}

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