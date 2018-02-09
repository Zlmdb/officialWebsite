var React = require('react');
var ReactDom = require('react-dom');
// var QuestionApp = require('./components/QuestionApp.js');
import Centercon from './components/centerCon.js'
import Header from 'common/components/head.js'
import Footer from 'common/components/Footer.js'
import 'common/reset.css'
import './treatment.styl'

class Common extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            arrObj:[
                { src: require('./images/1.png'), title: '实施专家，上门服务', detail: { detail1: '客户成功是服务的基础，为了保证软件工具的正常使用，我们建设了专业的实施专家队伍。', detail2: '这只专业的实施专家队伍，即深知美容行业的痛点，更了解如何用互联网工具赋能美业。带着软件即服务的理念，上门做好每一次的安装培训服务。' }},
                { src: require('./images/2.png'), title: '7*12H,线上客服', detail: { detail1: '为了每个流畅的瞬间，我们配置了专职的客服同事，每天早9点-晚9点全渠道监测用户使用问题，为了您和团队进行在线使用问答。', detail2: '如果您有问题可以第一时间联系我们，我们的客服同事一定会耐心的给您解答问题！' }},
                { src: require('./images/3.png'), title: '快速迭代，免费升级', detail: { detail1: '在这个变化节奏如此之快的时代，我们的业务在随着外部的环境发生着巨大的变化。', detail2: '有别于传统的软件服务商一次购买永不升级的方式，我们认为软件工具的生命力来源于适应于经营环境的不断迭代升级。' }},
                { src: require('./images/4.png'), title: '线下课堂，免费回炉', detail: { detail1: '每月，都会有新的功能推出！', detail2: '如何将遮羞工具用好，帮助总部提升效率，给团队肩负赋能力？走入我们的线下课堂吧，让帮我们做店的优质工具，发挥最大的价值。' }},
                { src: require('./images/5.png'), title: '五星安全，数据保障', detail: { detail1: '数据是一个企业的生存之本，为了保证您的数据安全，我们使用了多种技术安全手段：云端备份，高级防火墙，七重加密，实时数据备份，异地容灭。五星保障只为让您安心！', detail2: '' }}
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