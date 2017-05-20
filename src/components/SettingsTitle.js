import React , {Component} from "react";
import {connect} from "react-redux";

class SettingsTitle extends Component {
    constructor(props) {
        super(props);
        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle(e) {
        this.props.changeTitle(this.refs.inputTitle.value);
    }
    render()  {
        return (
            <div>
                <hr/>
                <label> Enter title
                <input type = "text"
                       value = {this.props.title}
                        onChange = {this.changeTitle}
                        ref = "inputTitle"/>
                </label>
            </div>
        );
    }
}



export default connect(
    state => ({
        title:state.textTitle,
    }),
    dispatch => ({
        changeTitle:(val) => {
            dispatch({type:"TEXT_TITLE",payload:val});
        },
    })
)(SettingsTitle);
