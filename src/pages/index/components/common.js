var React = require('react');
import Head from './head';
import Solider from './solider/solider';
import Function from './function/function';
import Treatment from './treatment/treatment';
import Tiyan from './tiyan/tiyan';
import Footer from 'common/components/Footer';

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
                { src: require('./treatment/images/software.png'), srcTitle: { title1: '实施专家', title2: '上门服务' }, masksrc: require('./treatment/images/1.png'), masktitle: '实施专家，上门服务', maskcontent:'客户成功是服务的基础，为了保证软件工具的正常使用，我们建设了专业的实施专家队伍，这支专业的实施专家队伍，即深知美容行业的需求，更了解如何用互联网工具赋能美业。带着软件即服务的理念，上门做好每一次的安装培训服务。'},
                { src: require('./treatment/images/site.png'), srcTitle: { title1: '7*12H', title2: '线上客服' }, masksrc: require('./treatment/images/2.png'), masktitle: '7*12H，线上客服', maskcontent: '客户成功是服务的基础，为了保证软件工具的正常使用，我们建设了专业的实施专家队伍，这支专业的实施专家队伍，即深知美容行业的需求，更了解如何用互联网工具赋能美业。带着软件即服务的理念，上门做好每一次的安装培训服务。'},
                { src: require('./treatment/images/treatment.png'), srcTitle: { title1: '免费回炉', title2: '线下课堂' }, masksrc: require('./treatment/images/3.png'), masktitle: '免费回炉，线下课堂', maskcontent: '客户成功是服务的基础，为了保证软件工具的正常使用，我们建设了专业的实施专家队伍，这支专业的实施专家队伍，即深知美容行业的需求，更了解如何用互联网工具赋能美业。带着软件即服务的理念，上门做好每一次的安装培训服务。'},
                { src: require('./treatment/images/enterprise.png'), srcTitle: { title1: '快速迭代', title2: '免费升级' }, masksrc: require('./treatment/images/1.png'), masktitle: '快速迭代，免费升级', maskcontent: '客户成功是服务的基础，为了保证软件工具的正常使用，我们建设了专业的实施专家队伍，这支专业的实施专家队伍，即深知美容行业的需求，更了解如何用互联网工具赋能美业。带着软件即服务的理念，上门做好每一次的安装培训服务。'},
                { src: require('./treatment/images/security.png'), srcTitle: { title1: '五星安全', title2: '数据保障' }, masksrc: require('./treatment/images/2.png'), masktitle: '五星安全，数据保障', maskcontent: '客户成功是服务的基础，为了保证软件工具的正常使用，我们建设了专业的实施专家队伍，这支专业的实施专家队伍，即深知美容行业的需求，更了解如何用互联网工具赋能美业。带着软件即服务的理念，上门做好每一次的安装培训服务。'},
            ]
        }
    }
    render() {
        return (
            <div style={{backgroundColor:'#ededed'}}>
                <Head/>
                <Solider/>
                <Function items={this.state.arrObj}/>
                <Treatment items={this.state.treatment} />
                <Tiyan/>
                <Footer/>
            </div>

        )
    }
}
export default Component1;