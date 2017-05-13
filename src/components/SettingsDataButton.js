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

    }

    render() {
        return (
            <a href = "/" onClick = {this.handleLink} style ={{textDecoration:"none"}}>
                <div className = "settingsDataButton">
                    Edit Data
                </div>
            </a>
        )
    }
}

export default connect(

)(SettingsDataButton);
