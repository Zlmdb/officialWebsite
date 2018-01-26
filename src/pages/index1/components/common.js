var React = require('react');
import Head from './head';
import Solider from './solider/solider';
import Function from './function/function';
import Treatment from './treatment/treatment';

class Component1 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            arrObj: [
                { src: require('./function/images/yuyue.png'), title: '预约评价', detail1: '提前预约', detail2: '匿名评价' },
                { src: require('./function/images/guke.png'), title: '顾客分析', detail1: '提前预约', detail2: '匿名评价' },
                { src: require('./function/images/mubiaozuizong.png'), title: '目标追踪', detail1: '提前预约', detail2: '匿名评价' },
                { src: require('./function/images/yuangong.png'), title: '员工行为', detail1: '提前预约', detail2: '匿名评价' },
                { src: require('./function/images/ketang.png'), title: '在线课堂', detail1: '提前预约', detail2: '匿名评价' },
                { src: require('./function/images/shouyin.png'), title: '智能收银', detail1: '提前预约', detail2: '匿名评价' },
                { src: require('./function/images/wuliuyunshu.png'), title: '物流运输', detail1: '提前预约', detail2: '匿名评价' },
                { src: require('./function/images/kucunguanli.png'), title: '库存管理', detail1: '提前预约', detail2: '匿名评价' },
            ],
            treatment:[
                {src:require('./treatment/images/software.png'),masksrc:require('./treatment/images/1.png'),masktitle:'基础软件'},
                { src: require('./treatment/images/site.png'), masksrc: require('./treatment/images/2.png'), masktitle: '网站建设'},
                { src: require('./treatment/images/treatment.png'), masksrc: require('./treatment/images/3.png'), masktitle: '服务与培训'},
                { src: require('./treatment/images/enterprise.png'), masksrc: require('./treatment/images/1.png'), masktitle: '企业应用'},
                { src: require('./treatment/images/security.png'), masksrc: require('./treatment/images/2.png'), masktitle: '安全市场'},
                { src: require('./treatment/images/api.png'), masksrc: require('./treatment/images/3.png'), masktitle: 'api市场'}
            ]
        }
    }
    render() {
        return (
            <div style={{backgroundColor:'#f5f5f5'}}>
                <Head/>
                <Solider/>
                <Function items={this.state.arrObj}/>
                <Treatment items={this.state.treatment} />
            </div>

        )
    }
}
export default Component1;