var React=require('react')


export default class Centercon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let me1 = require('../images/1.png'), me2 = require('../images/2.png'), me3 = require('../images/3.png')
        return (
            <div>
                <div className="treatmentitem1">
                    <p className="title">工作在这里</p>
                    <p>在这里，我们推崇简单、务实的工作方式，在轻松、快乐的工作环境中积累和分享。你不只是在这里工作，是和一群志趣相投的人一起生活！如无特别说明，工作地点均位于杭州。</p>
                    <p>你可以用任何方式介绍自己，比如，附上过去引以为豪的一个创造。如果你愿意，请发简历的同时附上微信ID以及生活照(请将简历直接粘贴于邮件正文中)，将有助于我们更快捷。全面的认识你。</p>
                </div>
                <div className="treatmentitem2">
                    <div className="item">
                        <div className="itemCon">
                            <div className="tr">
                                <img src={me1}></img>
                            </div>
                            <div className="div2">
                                <p className="title">产品经理<span>（1人）</span></p>
                                <p>1、具有市场调研的能力，研究市场以了解客户需求、竞争状况及市场力量，发现创新或改进产品的潜在机会。</p>
                                <p>2、负责产品定义及设计；</p>
                                <p>3、负责在预算内按时开发并发布产品；</p>
                                <p>4、负责宣介产品并对外的信息传播告诉外界有关产品的信息；</p>
                                <p>5、根据市场需求、提出一些产品概念；</p>
                                <p>6、负责对产品进行量化的工作(产品功能，产品模型，开发进度，所需资源)</p>
                            </div>
                            <a className="bash">
                                投递简历
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCon">
                            <div className="tr">
                                <img src={me2}></img>
                            </div>
                            <div className="div2">
                                <p className="title">销售经理<span>（1人）</span></p>
                                <p>1、具有市场调研的能力，研究市场以了解客户需求、竞争状况及市场力量，发现创新或改进产品的潜在机会。</p>
                                <p>2、负责产品定义及设计；</p>
                                <p>3、负责在预算内按时开发并发布产品；</p>
                                <p>4、负责宣介产品并对外的信息传播告诉外界有关产品的信息；</p>
                                <p>5、根据市场需求、提出一些产品概念；</p>
                                <p>6、负责对产品进行量化的工作(产品功能，产品模型，开发进度，所需资源)</p>
                            </div>
                            <a className="bash">
                                投递简历
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemCon">
                            <div className="tr">
                                <img src={me3}></img>
                            </div>
                            <div className="div2">
                                <p className="title">实施专员<span>（2人）</span></p>
                                <p>1、具有市场调研的能力，研究市场以了解客户需求、竞争状况及市场力量，发现创新或改进产品的潜在机会。</p>
                                <p>2、负责产品定义及设计；</p>
                                <p>3、负责在预算内按时开发并发布产品；</p>
                                <p>4、负责宣介产品并对外的信息传播告诉外界有关产品的信息；</p>
                                <p>5、根据市场需求、提出一些产品概念；</p>
                                <p>6、负责对产品进行量化的工作(产品功能，产品模型，开发进度，所需资源)</p>
                            </div>
                            <a className="bash">
                                投递简历
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
