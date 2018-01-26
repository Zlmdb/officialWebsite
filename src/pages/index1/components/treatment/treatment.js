var React = require('react');
import TreatmentItem from './treatmentItem'
import './treatment.styl'

export default class Trement extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let itemNodes = this.props.items.map((item, idx) => {
            return <TreatmentItem item={item} key={'item' + idx} />;
        });
        return (
            <div style={{marginTop:20+'px', paddingTop: 70 + 'px', paddingBottom: '70px', backgroundColor: '#fff' }}>
                <div style={{ fontSize: 32 + 'px', color: '#333', textAlign: 'center', marginBottom: 20 + 'px',fontWeight:'bold'}}>六大服务体系</div>
                <div className='spanStyle'></div>
                <div className="treatmentCon">
                    {itemNodes}
                </div>
            </div>
        );
    }
}
