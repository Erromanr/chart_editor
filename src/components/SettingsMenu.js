import React, { Component } from 'react';
import {connect} from "react-redux";
import SettingsPie from "./SettingsPie";
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
import SettingsDots from "./SettingsDots";
import SettingsBar from "./SettingsBar";

class SettingsMenu extends Component {
  constructor(props) {
      super(props);

  }

  render() {
    let individualMenu ;
    let activeData;
    let {value} = this.props;
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
                    <SettingsPie />
                </div>
            );
            break;
        case "dots":
            individualMenu = (
                <div>
                    <SettingsDots />
                </div>
            );
            break;
        case "bar":
            individualMenu = (
                <div>
                    <SettingsBar />
                </div>
            );
            break;
        case "barRow":
            individualMenu = (
                <div>
                    <SettingsBar />
                </div>
            );
            break;
        case "barStacked":
            individualMenu = (
                <div>
                    <SettingsBar innerPadding = {20}/>
                </div>
            );
            break;
        case "barRowStacked":
            individualMenu = (
                <div>
                    <SettingsBar innerPadding = {20}/>
                </div>
            );
            break;
      }

      if(value !=="radialLine" && value !== "radialArea" && value !== "pie" ) {
        activeData = (
          <div className = "settingsMenuContainer">
          <SettingsSize />
          <SettingsTitle />
          <SettingsDataButton text = "Edit Data"/>
          <SettingsAxis />
          <SettingsNumberFormat />
          <SettingsColor />


          {individualMenu}
          <SettingsSwitch />
          </div>
        )
      }
      else {
        activeData = (
          <div className = "settingsMenuContainer">
          <SettingsSize />
          <SettingsTitle />
          <SettingsDataButton text = "Edit Data"/>
          <SettingsColor />


          {individualMenu}
          <SettingsSwitch />
          </div>
        )
      }
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
