import React, { Component } from 'react';
import {connect} from "react-redux";
import '../style/MenuBar.css';

class MenuBar extends Component {
  constructor(props) {
      super(props);
      this.changeType = this.changeType.bind(this);
  }
  changeType(e) {
      e.preventDefault();
      this.props.changeType(e.target.id);
  }

  render() {
    return (
      <div className="menuBar">
          <div className  = "menuBarGroup">
              <a href = "#">
                  <div className = "menuBarPoint" onClick = {this.changeType} id = "bar">
                  Column
                  </div>
              </a>
              <a href = "#">
                  <div className = "menuBarPoint" onClick = {this.changeType} id = "barStacked">
                  Column Stacked
                  </div>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                  <div className = "menuBarPoint" onClick = {this.changeType} id = "barRow">
                  Bar
                  </div>
              </a>
            <a href = "#">
                  <div className = "menuBarPoint" onClick = {this.changeType} id = "barRowStacked">
                  Bar Stacked
                  </div>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                  <div className = "menuBarPoint" onClick = {this.changeType} id = "pie">
                  Pie
                  </div>
              </a>
              <a href = "#">
                  <div className = "menuBarPoint" onClick = {this.changeType} id = "line">
                  Line
                  </div>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                <div className = "menuBarPoint" onClick = {this.changeType} id = "dots">
                  Dots
                </div>
              </a>
              <a href = "#">
                <div className = "menuBarPoint" onClick = {this.changeType} id = "area">
                  Area
                </div>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                <div className = "menuBarPoint" onClick = {this.changeType} id = "area100">
                  Area 100%
                </div>
              </a>
              <a href = "#">
                <div className = "menuBarPoint" onClick = {this.changeType} id = "areaStacked">
                   Stacked Area
                </div>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                <div className = "menuBarPoint" onClick = {this.changeType} id = "areaStepped">
                  Area Stepped
                </div>
              </a>
              <a href = "#">
                <div className = "menuBarPoint" onClick = {this.changeType} id = "lineStepped">
                   Stepped Line
                </div>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                <div className = "menuBarPoint" onClick = {this.changeType} id = "radialLine">
                  Radial Line
                </div>
              </a>
              <a href = "#">
                <div className = "menuBarPoint" onClick = {this.changeType} id = "radialArea">
                   Radial Area
                </div>
              </a>
          </div>


      </div>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch =>({
      changeType:(value) => {
          dispatch({type:"CHANGE_TYPE_CHART",payload:value})
      }
  })
)(MenuBar);
