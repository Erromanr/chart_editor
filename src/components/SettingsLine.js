import React , {Component} from "react";
import {connect} from "react-redux";
import {Toggle} from 'material-ui';

class SettingsLine extends Component {
    constructor(props) {
        super(props);
        this.point = this.point.bind(this);
        this.monotone = this.monotone.bind(this);
    }

    point(e) {
        this.props.point(e.target.checked);
    }
    monotone(e) {
        this.props.monotone(e.target.checked);
    }
    render() {
        let {point,monotone} = this.props.settings;

        return (
            <div style = {{paddingLeft:20}}>
                    <Toggle label = "points"
                            labelPosition = "right"
                            toggled = {point}
                            onToggle = {this.point}/>

                    <Toggle label = "monotone"
                            labelPosition = "right"
                            toggled = {monotone}
                            onToggle = {this.monotone}
                            />

            </div>
        );
    }
}


export default connect(
    state => ({
        settings:state.settingsLine,
    }),
    dispatch => ({
        point:(val) => {
            dispatch({type:"LINE_POINT",payload:val});
        },
        monotone:(val) => {
            dispatch({type:"LINE_MOMOTONE",payload:val});
        }
    })
)(SettingsLine);
