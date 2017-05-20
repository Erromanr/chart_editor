import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsDataButton.css";

class SettingsDataButton extends Component {
    constructor(props) {
        super(props);
        this.handleLink = this.handleLink.bind(this);
    }

    handleLink(e) {
        e.preventDefault();
        this.props.active();
    }

    render() {
        return (
            <a href = "/" onClick = {this.handleLink} style ={{textDecoration:"none"}}>
                <div className = "settingsDataButton">
                    {this.props.text}
                </div>
            </a>
        )
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        active:() => {
            dispatch({type:"ACTIVE_DATA_TABLE"});
        },
    })
)(SettingsDataButton);
