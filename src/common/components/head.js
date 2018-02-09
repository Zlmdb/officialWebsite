var React = require('react');
// var ReactDOM = require('react-dom');
import './head.styl'

class Header extends React.Component {
    constructor(props) {
        super(props);
        // this.handleForm = this.handleForm.bind(this);
    }
    render() {
        return (
            <div style={{background:'#fff',marginBottom:'30px'}}>
                <div className="head">
                    <div className="logoCon"></div>
                    <ul className="head_ul">
                        <li className="headList firstmall"> <a href="./index.html">首页</a> </li>
                        <li className="headList thingsmall"> <a href="./things.html">产品</a></li>
                        <li className="headList treatmentmall"><a href="./treatment.html">服务体系</a></li>
                        <li className="headList applicationmall"><a href="./index.html">应用下载</a></li>
                        <li className="headList aboutmall"><a href="./about.html">关于我们</a></li>
                        <li className="signIn">登录</li>
                    </ul>
                </div>
            </div>
           
        )
    }
}
export default Header;