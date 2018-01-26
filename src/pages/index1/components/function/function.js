var React=require('react');
import FunctionItem from './functionItem'
import './function.styl'

export default class Function extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let itemNodes = this.props.items.map((item, idx) => {
            return <FunctionItem item={item} key={'item' + idx} />;
        });
        
        return (
            <div className="function" style={{paddingTop:70+'px',paddingBottom:'170px',backgroundColor:'#fff'}}>
                <div style={{ fontSize: 32 + 'px', color: '#333', textAlign: 'center', marginBottom: 20 + 'px',fontWeight:'bold'}}>八大核心功能</div>  
                <div className='spanStyle'></div>
                <div className="functionCon"> 
                    {itemNodes}
                </div>
            </div>
        );
    }
}
