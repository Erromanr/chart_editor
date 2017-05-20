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
            <div>
            <hr/>
            <label> Pie radius
            <input type = "range"
                   onChange = {this.handleRange}
                    min="0"
                    max="100"
                    step="1"
                    value = {this.props.radius}
                   />
            </label>
            </div>
        );
    }
}


export default connect(
    state => ({
        radius:state.pieInnerRadius,
    }),
    dispatch => ({
        range:(value) => {
            dispatch({type:"PIE_INNER_RADIUS",payload:value});
        }
    })

)(PieRange)
