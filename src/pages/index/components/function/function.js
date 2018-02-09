var React=require('react');
import FunctionItem from './functionItem'
import './function.styl'

export default class Function extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let itemNodes = this.props.items.map((item, idx) => {
            if (idx == 3 || idx == 7){
                return <FunctionItem item={item} key={'item' + idx} addClass="0"/>;
            }else{
                return <FunctionItem item={item} key={'item' + idx} addClass="1"/>;
            }
            
        });
        return (
            <div className="function" style={{marginTop:30+'px',backgroundColor:'#ededed'}}>
                {/* <div style={{ fontSize: 32 + 'px', color: '#333', textAlign: 'center', marginBottom: 20 + 'px',fontWeight:'bold'}}>八大核心功能</div>   */}
                {/* <div className='spanStyle'></div> */}
                <div className="thiefFun"> <span style={{marginLeft:'20px'}}>主要功能</span> </div>
                <div className="functionCon"> 
                    {itemNodes}
                </div>
                <div className="bottomFun"></div>
            </div>
        );
    }
}
