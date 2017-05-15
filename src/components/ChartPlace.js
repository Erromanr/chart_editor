import React, { Component } from 'react';
import ChartPie from "./ChartPie";
import ChartBar from "./ChartBar";
import ChartLine from "./ChartLine";
import ChartDots from "./ChartDots";
import ChartBarRow from "./ChartBarRow";

import TableForData from "./TableForData";

import {connect} from "react-redux";

import '../style/ChartPlace.css';

class ChartPlace extends Component {
  render() {
    let elem;
    switch (this.props.value) {
      case "pie":
        elem = <ChartPie height = {this.props.size.height}
                          width = {this.props.size.width}
                          />;
        break;
      case "bar":
        elem = <ChartBar height = {this.props.size.height}
                          width = {this.props.size.width}

                          />;
        break;
      case "line":
        elem = <ChartLine height = {this.props.size.height}
                          width = {this.props.size.width}
                          points = {true}
                          />;
        break;
      case "dots":
        elem = <ChartDots height = {this.props.size.height}
                          width = {this.props.size.width}

                          />;
        break;
      case "barStacked":
        elem  = <ChartBar height = {this.props.size.height}
                           width = {this.props.size.width}
                           transform = {["stack"]}
                           combined = {true}
                                 />;
        break;
      case "barRow":
          elem = <ChartBarRow height = {this.props.size.height}
                             width = {this.props.size.width}
                             transform = {["rotate"]}
                                   />;
          break;
      case "barRowStacked":
          elem = <ChartBarRow height = {this.props.size.height}
                             width = {this.props.size.width}
                             transform = {["stack","rotate"]}
                             combined = {true}
                                   />;
          break;
      case "area":
          elem = <ChartLine height = {this.props.size.height}
                            width = {this.props.size.width}
                            area = {true}
                            points = {false}
                            />;
          break;
      case "areaStacked":
          elem = <ChartLine height = {this.props.size.height}
                            width = {this.props.size.width}
                            area = {true}
                            transform = {"stack"}
                            points = {false}
                            />;
          break;
      case "area100":
          elem = <ChartLine height = {this.props.size.height}
                            width = {this.props.size.width}
                            area = {true}
                            transform = {"stackNormalized"}
                            points = {false}
                            />;
          break;
      case "areaStepped":
          elem = <ChartLine height = {this.props.size.height}
                            width = {this.props.size.width}
                            area = {true}
                            transform = {"stackNormalized"}
                            interpol = {"step"}
                            points = {false}
                            />;
          break;
      case "lineStepped":
          elem = <ChartLine height = {this.props.size.height}
                            width = {this.props.size.width}
                            interpol = {"step"}
                            points = {false}
                            />;
          break;
    }
    return (
      <div className="chartPlace">

          {elem}
          {this.props.activeTable ? <TableForData /> : null}
      </div>
    );
  }
}

export default connect(
    state => ({
        value:state.chartsType,
        size:state.chartsSize,
        activeTable:state.activeDataTable,
    }),
    dispatch => ({

    })
)(ChartPlace);
