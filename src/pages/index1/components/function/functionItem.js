var React=require('react');


export default class Functionitem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item= this.props.item;
        return (
           
                <div className="functionitem">
                    {/* <div className="tag"> */}
                            <img src={item.src}></img>
                    {/* </div> */}
                    <div className="title">{item.title}</div>
                    <div className="detail"><span className="detail1">{item.detail1}</span><span className="detail2">{item.detail2}</span></div>
                </div>
           
        );
    }
}
