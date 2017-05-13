import React, { Component } from 'react';
import './App.css';
import MenuBar from "./components/MenuBar";
import ChartPlace from "./components/ChartPlace";
import SettingsMenu from "./components/SettingsMenu";
import {connect} from "react-redux";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <ChartPlace />
        <SettingsMenu />
      </div>
    );
  }
}

export default connect(

)(App);
