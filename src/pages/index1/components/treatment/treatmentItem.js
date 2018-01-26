var React = require('react');
export default class Functionitem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.item;
        return (

            <div className="treatmentitem">
                <div className="treattag">
                    <img src={item.src}></img>
                </div>
                <div className="mask">
                    <div className="con">
                        <div className="cona">
                            <img src={item.masksrc}></img>
                        </div>
                        <div className="spanStylef"></div>
                        <div className="masktitle">{item.masktitle}</div>
                    </div>
                </div>
                
                {/* <div className="title">{item.title}</div> */}
                {/* <div className="detail"><span className="detail1">{item.detail1}</span><span className="detail2">{item.detail2}</span></div> */}
            </div>

        );
    }
}
