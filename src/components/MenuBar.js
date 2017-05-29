import React, { Component } from 'react';
import {connect} from "react-redux";
import '../style/MenuBar.css';
import column from "../pictures/column.png"
import columnStacked from "../pictures/columnStacked.png"
import bar from "../pictures/bar.png";
import barStacked from "../pictures/barStacked.png";
import line from "../pictures/line.png";
import area from "../pictures/area.png";
import areaStacked from "../pictures/areaStacked.png";
import area100 from "../pictures/area100.png";
import pie from "../pictures/pie.png";
import dots from "../pictures/dots.png";
import steppedLine from "../pictures/steppedLine.png";
import areaStepped from "../pictures/areaStepped.png";
import radialArea from "../pictures/radialArea.png";
import radialLine from "../pictures/radialLine.png";
import { Scrollbars } from 'react-custom-scrollbars';
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
                  <img src = {column} className = "menuBarPoint" onClick = {this.changeType} id = "bar" />
                  <span>Column</span>
              </a>
              <a href = "#">
                  <img src = {columnStacked} className = "menuBarPoint" onClick = {this.changeType} id = "barStacked"/>
                  <span>Column Stack</span>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                  <img src = {bar} className = "menuBarPoint" onClick = {this.changeType} id = "barRow" />
                  <span>Bar</span>
              </a>
            <a href = "#">
                  <img src = {barStacked} className = "menuBarPoint" onClick = {this.changeType} id = "barRowStacked" />
                  <span>Bar Stacked</span>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                  <img src = {pie} className = "menuBarPoint" onClick = {this.changeType} id = "pie" />
                  <span>Pie</span>
              </a>
              <a href = "#">
                  <img src = {line} className = "menuBarPoint" onClick = {this.changeType} id = "line" />
                  <span>Line</span>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                <img src = {dots} className = "menuBarPoint" onClick = {this.changeType} id = "dots" />
                <span>Dots</span>
              </a>
              <a href = "#">
                <img src = {area} className = "menuBarPoint" onClick = {this.changeType} id = "area" />
                <span>Area</span>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                <img src = {area100} className = "menuBarPoint" onClick = {this.changeType} id = "area100" />
                <span>Area 100%</span>
              </a>
              <a href = "#">
                <img src = {areaStacked} className = "menuBarPoint" onClick = {this.changeType} id = "areaStacked" />
                <span>Area Stacked</span>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                <img src = {areaStepped} className = "menuBarPoint" onClick = {this.changeType} id = "areaStepped" />
                <span>Area Stepped</span>
              </a>
              <a href = "#">
                <img src = {steppedLine} className = "menuBarPoint" onClick = {this.changeType} id = "lineStepped" />
                <span>Line Stepped</span>
              </a>
          </div>
          <div className  = "menuBarGroup">
              <a href = "#">
                <img src = {radialLine} className = "menuBarPoint" onClick = {this.changeType} id = "radialLine" />
                <span>Radial Line</span>
              </a>
              <a href = "#">
                <img src = {radialArea} className = "menuBarPoint" onClick = {this.changeType} id = "radialArea" />
                <span>Radial Area</span>
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
