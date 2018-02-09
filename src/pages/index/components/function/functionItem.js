var React=require('react');


export default class Functionitem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.item, classValue = this.props.addClass === '1' ? 'am-icon-check' : '';
        return (
           
            <div className={"functionitem" + " " + classValue}>
                    <img src={item.src}></img>
                    <div className="title">{item.title}</div>
                    <div className="detail"><span className="detail1">{item.detail1}</span><span className="detail2">{item.detail2}</span></div>
                </div>
           
        );
    }
}
