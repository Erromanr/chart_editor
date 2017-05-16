import React, { Component } from 'react';
import {connect} from "react-redux";
import PieRange from "./PieRange";
import SettingsAxis from "./SettingsAxis";
import SettingsSize from "./SettingsSize";
import SettingsNumberFormat from "./SettingsNumberFormat";
import SettingsDataButton from "./SettingsDataButton";
import SettingsTitle from "./SettingsTitle";
import TableForData from "./TableForData";

import '../style/SettingsMenu.css';

class SettingsMenu extends Component {
  constructor(props) {
      super(props);

  }

  render() {
    return (
      <div className="settingsMenu">
          <SettingsSize />
            <SettingsTitle />
          <PieRange />
          <SettingsAxis />
          <SettingsNumberFormat />
          <SettingsDataButton />
          {this.props.activeTable ? <TableForData /> : null}
      </div>
    );
  }
}

export default connect(
    state => ({
        activeTable:state.activeDataTable,
    }),
    dispatch => ({

    })
)(SettingsMenu);
