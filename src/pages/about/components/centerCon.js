var React=require('react')


export default class Centercon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let me=require('../images/1.jpg')
        return (
            <div>
                <div className="treatmentitem1">
                        <img src={me}></img>
                </div>
                <div className="treatmentitem2">
                    <div className="tr">
                        <p className="pp">用武之地 尽在若茶</p>
                        <div className="div1">
                            <p>讲真，现在的工作还凑合，薪资也凑合</p>
                            <p>单总觉得离理想的满意的工作还差那么一点</p>
                            <p>有时也会觉得自己进了个“假公司”</p>
                            <p>求职跟像找对象</p>
                            <p>世人只知落花痴，落花未必有意</p>
                        </div>
                    </div>
                    <p className="middleP"></p>
                    <div className="div2">
                        <p>简历没有回音，不一定是你不够好</p>
                        <p>你需要等，等一群聊得来的同事</p>
                        <p>等一个薪水让你乐不可支的OFFER</p>
                        <p>等一个蠢萌又充满智慧的和蔼上司</p>
                        <p>等一个超棒的项目，等一次飞跃的成长</p>
                        <p>从来都没有不抵抗重力的飞翔</p>
                        <p>只要你足够有料、有自信、有水准、有理想</p>
                    </div>
                </div>
            </div>
        );
    }
}
