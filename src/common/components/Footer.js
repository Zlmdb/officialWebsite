var React = require('react');
// var ReactDOM = require('react-dom');
import './footer.styl'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        // this.handleForm = this.handleForm.bind(this);
    }
    render() {
        let telephone=require('./telephone.png')
        return (
            <div style={{ background: '#fff', marginTop: '30px' }}>
                <div className="foot">
                    <div className="footItem ">
                        <div className="content footItemR">
                        <p className="title">联系我们</p>
                        <p className="detail detailSpecial1" style={{marginBottom:'30px'}}> 
                            <span>杭州市</span> 
                            <span>下城区</span> 
                            <span>东新路</span> 
                            <span>江南巷16号</span> 
                        </p>
                        <p className="detail detailSpecial2">
                            <img src={telephone} style={{verticalAlign:'middle'}}/>
                            <span style={{marginLeft:'16px'}}>15268511244</span>
                        </p>
                        </div>
                    </div>
                    <div className="footItem ">
                        <div className="content footItemR">
                        <p className="title">何为若茶</p>
                        <div className="detail lineHeight" style={{padding:"0 20px"}}>
                                <p>若茶团队本着创客，极致思维，致力</p>
                                <p>于打造一家更聪明的美容院，将数据</p>
                                <p>化的模式用于美容行业，帮助美容院</p>
                                <p>更好的管理，工作与进步。</p>
                        </div>
                        </div>
                    </div>
                    <div className="footItem">
                        <div className="content">
                        <p className="title">加入我们</p>
                        <p className="detail">
                                <a className="buttonA" style={{ marginRight: '40px' }} href="./about.html">关于我们</a>
                            <a className="buttonA" href="./worktogather.html">一起工作</a>
                        </p>
                        </div>
                    </div>
                   
                </div>
            </div>

        )
    }
}
export default Footer;