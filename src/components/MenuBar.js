import React, { Component } from 'react';
import {connect} from "react-redux";
import '../style/MenuBar.css';

class MenuBar extends Component {
  constructor(props) {
      super(props);
      this.handlePie = this.handlePie.bind(this);
      this.handleBar = this.handleBar.bind(this);
      this.handleLine = this.handleLine.bind(this);
      this.handleDots = this.handleDots.bind(this);
      this.handleBarStacked = this.handleBarStacked.bind(this);
      this.handleBarRow = this.handleBarRow.bind(this);
      this.handleBarRowStacked = this.handleBarRowStacked.bind(this);

  }
  handlePie() {
      this.props.pie();
  }
  handleBar() {
      this.props.bar();
  }
  handleLine() {
      this.props.line();
  }
  handleDots() {
      this.props.dots();
  }
  handleBarStacked() {
      this.props.barStacked();
  }
  handleBarRow() {
      this.props.barRow();
  }
  handleBarRowStacked() {
      this.props.barRowStacked();
  }
  render() {
    return (
      <div className="menuBar">
          <div className = "menuBarGroup">
              <div className = "menuBarPoint" onClick = {this.handleBar}>
                  Column
              </div>
              <div className = "menuBarPoint" onClick = {this.handleBarStacked}>
                  Column Stacked
              </div>
              <div className = "menuBarPoint" onClick = {this.handleBarRow}>
                  Bar
              </div>
              <div className = "menuBarPoint" onClick = {this.handleBarRowStacked}>
                  Bar Stacked
              </div>
          </div>
          <div className = "menuBarPoint" onClick = {this.handlePie}>
              Pie
          </div>
          <div className = "menuBarPoint" onClick = {this.handleLine}>
              Line
          </div>
          <div className = "menuBarPoint" onClick = {this.handleDots}>
              Dots
          </div>
          <div className = "menuBarPoint">
          </div>
          <div className = "menuBarPoint">
          </div>
          <div className = "menuBarPoint">
          </div>
          <div className = "menuBarPoint">
          </div>

      </div>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch =>({
      pie:() => {
          dispatch({type:"PIE",payload:"pie"});
      },
      bar:() => {
          dispatch({type:"BAR",payload:"bar"})
      },
      line:() => {
          dispatch({type:"LINE",payload:"line"})
      },
      dots:() => {
          dispatch({type:"DOTS",payload:"dots"})
      },
      barStacked:() => {
          dispatch({type:"BAR_STACKED",payload:"barStacked"})
      },
      barRow:() => {
          dispatch({type:"BAR_ROW",payload:"barRow"});
      },
      barRowStacked:() => {
          dispatch({type:"BAR_ROW_STACKED",payload:"barRowStacked"})
      },
  })
)(MenuBar);
