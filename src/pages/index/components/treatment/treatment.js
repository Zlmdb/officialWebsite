var React = require('react');
import TreatmentItem from './treatmentItem'
import './treatment.styl'

export default class Trement extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let itemNodes = this.props.items.map((item, idx) => {
            if (idx == 4) {
                return <TreatmentItem item={item} key={'item' + idx} addClass="0" />;
            } else {
                return <TreatmentItem item={item} key={'item' + idx} addClass="1" />;
            }
        });
        return (
            <div style={{ marginTop: 30 + 'px', backgroundColor: '#ededed' }}>
                {/* <div style={{ fontSize: 32 + 'px', color: '#333', textAlign: 'center', marginBottom: 20 + 'px',fontWeight:'bold'}}>六大服务体系</div> */}
                {/* <div className='spanStyle'></div> */}
                <div className="thiefFun"> <span style={{ marginLeft: '20px' }}>五大服务体系</span> </div>
                <div className="treatmentCon">
                    {itemNodes}
                </div>
                <div className="bottomFun"></div>
            </div>
        );
    }
}
