import React , {Component} from "react";
import {connect} from "react-redux";
import {Toggle} from 'material-ui';

class SettingsSwitch extends Component {
    constructor(props) {
        super(props);
        this.changeCheck = this.changeCheck.bind(this);
        this.changeLegend = this.changeLegend.bind(this);
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

    changeLegend(e) {
        this.props.legend(e.target.checked);
    }

    render() {
        let style = {
            paddingLeft:20,
        }
        let checkboxLabel  = {
            color:"silver",
        }
        return (
            <div style = {style}>


                <Toggle label = "switch rows and columns"
                        labelPosition="right"
                        toggled = {this.props.check}
                        onToggle = {this.changeCheck}
                        labelStyle = {checkboxLabel}
                       />


                <Toggle label = "legend"
                        toggled = {this.props.legendStatus}
                        onToggle = {this.changeLegend}
                        labelPosition="right"
                        labelStyle = {checkboxLabel}
                       />

            </div>
        );
    }
}


export default connect(
    state => ({
        check:state.switchRC,
        legendStatus:state.legend,
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
        },
        legend:(val) => {
            dispatch({type:"LEGEND",payload:val})
        },
    })
)(SettingsSwitch);
