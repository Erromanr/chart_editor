import React, { Component } from 'react';
import './App.css';
import MenuBar from "./components/MenuBar";
import ChartPlace from "./components/ChartPlace";
import SettingsMenu from "./components/SettingsMenu";
import {connect} from "react-redux";
import ActiveDataSheets from "./components/ActiveDataSheets";

class App extends Component {
  render() {
    let elem  = (
      <div>
        <MenuBar />
        <ChartPlace />
        <SettingsMenu />
      </div>
    );
    if(this.props.data) {
        elem = (
            <div>
              <ChartPlace />
              <ActiveDataSheets />
            </div>
        )
    }
    return (
      <div className="App">
        
        {elem}
      </div>
    );
  }
}

export default connect(
    state => ({
        data:state.activeDataTable,
    })
)(App);
