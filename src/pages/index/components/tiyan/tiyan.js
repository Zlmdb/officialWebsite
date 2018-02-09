var React = require('react');
// import FunctionItem from './functionItem'
import './tiyan.styl'

export default class Tiyan extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let ma1 = require('./images/xibao.png'), ma2 = require('./images/erweima.png'), allLogo = require("./images/allLogo.png")
        return (
            <div>
                <div className="function" style={{ marginTop: 30 + 'px', backgroundColor: '#ededed' }}>
                    <div className="thiefFun"> <span style={{ marginLeft: '20px' }}>轻松一扫，立即体验</span> </div>
                    <div className="tiyanCon">
                        <div className="tiyanConItem tiyanConItemR">
                            <div className="imgMargin">
                                <img src={ma1}/> 
                            </div>
                            <div>
                                <p className="dtFont">喜鹊喜报<span className="dot">.</span>员工端</p>
                                <p className="ddFont titletwo">查看数据、日报、顾客、计划、订单</p>
                                <p className="ddFont">扫描下载后，点击体验通道，即可轻松体验</p>
                            </div>
                        </div>
                        <div className="tiyanConItem tiyanConItemL">
                            <div className="imgMargin imgMarginLeft">
                                <img src={ma2}/>
                            </div>
                            <div >
                                <p className="dtFont">自定义品牌小程序<span className="dot">.</span>客户端</p>
                                <p className="ddFont titletwo">自定义品牌小程序 智能预约 匿名评价</p>
                                <p className="ddFont">扫描下载后，即可轻松预约</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="function" style={{ marginTop: 30 + 'px', backgroundColor: '#ededed'}}>
                    <div className="thiefFun" style={{position: 'relative' }}> <span style={{ marginLeft: '20px' }}>他们正在使用...</span> <a className="todetail">详细了解</a></div>
                    <div className="tiyanCon tiyanConDown">
                        <div>
                            <img src={allLogo} className="allLogo" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
