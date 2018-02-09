var React = require('react');
import Head from 'common/components/head.js';


class Component1 extends React.Component {
    constructor(props) {
        super(props);
        // this.voteUp = this.voteUp.bind(this);
        // this.voteDown = this.voteDown.bind(this);
    }
    // voteUp(e) {

    //     var newCount = parseInt(this.props.voteCount, 10) + 1;
    //     this.props.onVote(this.props.questionKey, newCount)
    // }
    // voteDown(e) {
    //     var newCount = parseInt(this.props.voteCount, 10) - 1;
    //     this.props.onVote(this.props.questionKey, newCount)
    // }
    render() {
        return (
            <div className="">
                <Head/>
            </div>
        )
        
    }
}
export default Component1;