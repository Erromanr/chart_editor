import React , {Component} from "react";
import {connect} from "react-redux";


class SettingsPie extends Component {
    constructor(props) {
        super(props);
        this.handleRange = this.handleRange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleRange(e) {
        this.props.range(+e.target.value);
    }
    handleCheck(e) {
        this.props.check(e.target.checked);
    }
    render() {
        let {radius,combined} = this.props.pie;
        return (
            <div>
            <hr/>
            <label> Pie radius
            <input type = "range"
                   onChange = {this.handleRange}
                    min="0"
                    max="100"
                    step="1"
                    value = {radius}
                   />
            </label>
            <label> combined
                <input type = "checkbox"
                       onChange = {this.handleCheck}
                       checked = {combined}
                       />
            </label>
            </div>
        );
    }
}


export default connect(
    state => ({
        pie:state.settingsPie,
    }),
    dispatch => ({
        range:(value) => {
            dispatch({type:"PIE_INNER_RADIUS",payload:value});
        },
        check:(value) => {
            dispatch({type:"PIE_COMBINED",payload:value})
        },
    })

)(SettingsPie)
