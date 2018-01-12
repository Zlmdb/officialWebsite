var React = require('react');
// var ReactDOM = require('react-dom');
import './head.styl'

class Component1 extends React.Component {
    constructor(props) {
        super(props);
        // this.handleForm = this.handleForm.bind(this);
    }
    render() {
        return (
            <div className="head">
                <div className="logoCon"></div>
                <ul className="head_ul">
                    <li className="headList">首页</li>
                    <li className="headList">产品</li>
                    <li className="headList">服务体系</li>
                    <li className="headList">应用下载</li>
                    <li className="headList">关于我们</li>
                    <li className="signIn">登录</li>
                </ul>
            </div>
           
        )
    }
}
export default Component1;