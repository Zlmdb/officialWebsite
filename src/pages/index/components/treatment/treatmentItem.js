var React = require('react');
export default class Functionitem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.item, classValue = this.props.addClass === '1' ? 'am-icon-check' : '';
        return (

            <div className={"treatmentitem" +" "+ classValue}>
                <div className="treattag">
                    <img src={item.src}></img>
                    <div className="title" style={{marginBottom:'20px'}}>{item.srcTitle.title1}</div>
                    <div className="title">{item.srcTitle.title2}</div>
                </div>
                <div className="mask">
                    <div className="con">
                        <div className="cona">
                            <p>{item.masktitle}</p>
                        </div>
                        {/* <div className="spanStylef"></div> */}
                        <div className="masktitle">{item.maskcontent}</div>
                    </div>
                </div>
            </div>

        );
    }
}
