import React , {Component} from "react";
import {connect} from "react-redux";


class PieRange extends Component {
    constructor(props) {
        super(props);
        this.handleRange = this.handleRange.bind(this);
    }
    handleRange(e) {
        this.props.range(+e.target.value);
    }
    render() {
        return (
            <input type = "range"
                   onChange = {this.handleRange}
                    min="0"
                    max="100"
                    step="1"
                   />
            
        );
    }
}


export default connect(
    state => ({

    }),
    dispatch => ({
        range:(value) => {
            dispatch({type:"PIE_INNER_RADIUS",payload:value});
        }
    })

)(PieRange)
