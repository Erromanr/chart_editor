import React , {Component} from  "react";
import TableForData from "./TableForData";
import SettingsDataButton from "./SettingsDataButton";
import "../style/ActiveDataSheets.css";

class ActiveDataSheets extends Component {
    constructor(props) {
        super(props);
    }


    render()  {
        return (
            <div className = "activeTable">
                <TableForData />
                <SettingsDataButton text= "hide" />
            </div>
        )
    }
}

export default ActiveDataSheets;
