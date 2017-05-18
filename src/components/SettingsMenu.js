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

class SettingsMenu extends Component {
  constructor(props) {
      super(props);

  }

  render() {
    let individualMenu ;
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
    return (
      <div className="settingsMenu">
          <SettingsAxis />
          <SettingsNumberFormat />
          <SettingsDataButton />
          <SettingsSize />
          <SettingsTitle />
          {individualMenu}
          <SettingsSwitch />

          {this.props.activeTable ? <TableForData /> : null}
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
