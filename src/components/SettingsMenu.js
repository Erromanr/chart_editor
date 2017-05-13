import React, { Component } from 'react';
import {connect} from "react-redux";
import PieRange from "./PieRange";
import SettingsAxis from "./SettingsAxis";
import SettingsSize from "./SettingsSize";
import SettingsNumberFormat from "./SettingsNumberFormat";
import SettingsDataButton from "./SettingsDataButton";

import '../style/SettingsMenu.css';

class SettingsMenu extends Component {
  constructor(props) {
      super(props);

  }

  render() {
    return (
      <div className="settingsMenu">
          <SettingsSize />
          <PieRange />
          <SettingsAxis />
          <SettingsNumberFormat />
          <SettingsDataButton />
      </div>
    );
  }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(SettingsMenu);
