import React, { Component } from 'react';
import {connect} from "react-redux";
import PieRange from "./PieRange";
import SettingsAxis from "./SettingsAxis";
import SettingsSize from "./SettingsSize";
import SettingsNumberFormat from "./SettingsNumberFormat";
import SettingsDataButton from "./SettingsDataButton";
import SettingsTitle from "./SettingsTitle";
import TableForData from "./TableForData";
import SettingsLine from "./SettingsLine";
import '../style/SettingsMenu.css';
import SettingsSwitch from "./SettingsSwitch";
import SettingsColor from "./SettingsColor";

class SettingsMenu extends Component {
  constructor(props) {
      super(props);

  }

  render() {
    let individualMenu ;
    let activeData;
    if(this.props.activeTable) {
        activeData = (
          <div>
          <TableForData />
          <SettingsDataButton text = "Hide"/>
          </div>
        ) ;
    }
    else {
      switch(this.props.value) {
        case "line":
            individualMenu = (
                <div>
                    <SettingsLine />
                </div>
            );
            break;
        case "pie":
            individualMenu = (
                <div>
                    <PieRange />
                </div>
            );
            break;

      }
        activeData = (
          <div>
          <SettingsAxis />
          <SettingsNumberFormat />
          <SettingsColor />
          <SettingsDataButton text = "Edit Data"/>
          <SettingsSize />
          <SettingsTitle />
          {individualMenu}
          <SettingsSwitch />
          </div>
        )
    }

    return (
      <div className="settingsMenu">
          {activeData}
      </div>
    );
  }
}

export default connect(
    state => ({
        activeTable:state.activeDataTable,
        value:state.chartsType,
    }),
    dispatch => ({

    })
)(SettingsMenu);
