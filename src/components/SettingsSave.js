import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsDataButton.css";

class SettingsSave extends Component {
    constructor(props) {
        super(props);
        this.handleLink = this.handleLink.bind(this);
    }

    handleLink(e) {
        
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

    })
)(SettingsSave);
