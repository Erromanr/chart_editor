import React , {Component} from "react";
import {connect} from "react-redux";


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
            <div>
                <span>settings line</span>
                <hr/>
                <label>point
                    <input type = "checkbox"

                           checked = {point}
                           onChange = {this.point}/>
                </label>
                <label>monotone
                    <input type = "checkbox"

                           checked = {monotone}
                           onChange = {this.monotone}/>
                </label>
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
