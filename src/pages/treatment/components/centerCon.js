var React=require('react')


export default class Centercon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.data;
        return (
            <div className="treatmentitem">
                <div className="treattag">
                    <img src={item.src}></img>
                </div>
                <div className="rightCon">
                    <div className="centerCon">
                        <p className="title">{item.title}</p>
                        <div className="con">
                            <div className="cona">
                                <p className="content">{item.detail.detail1}</p>
                            </div>
                            <div className="cona">
                                <p className="content">{item.detail.detail2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
