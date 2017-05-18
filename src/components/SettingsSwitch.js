import React , {Component} from "react";
import {connect} from "react-redux";

class SettingsSwitch extends Component {
    constructor(props) {
        super(props);
        this.changeCheck = this.changeCheck.bind(this);
    }

    changeCheck(e) {
        this.props.change(e.target.checked);
        if(e.target.checked) {
            this.props.switchData();
        }
        else {
            this.props.normalData();
        }
    }
    render() {
        return (
            <div>
                <hr/>
                <label > switch rows and columns
                <input type = "checkbox"
                       checked = {this.props.check}
                       onChange = {this.changeCheck}
                       />
                </label>
            </div>
        );
    }
}


export default connect(
    state => ({
        check:state.switchRC,
    }),
    dispatch => ({
        change:(val) => {
            dispatch({type:"SWITCH_ROWS_COLUMNS",payload:val})
        },
        switchData:() => {
            dispatch({type:"CONVERT_DATA_REVERSE"})
        },
        normalData:() => {
            dispatch({type:"CONVERT_DATA"})
        }
    })
)(SettingsSwitch);
