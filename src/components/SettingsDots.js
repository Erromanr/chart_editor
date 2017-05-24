import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsDots.css";

class SettingsDots extends Component {
    constructor(props) {
        super(props);
        this.dotsChange = this.dotsChange.bind(this);
        this.radiusChange = this.radiusChange.bind(this);
    }

    dotsChange(e) {
          this.props.dotsChange(e.target.value);
    }

    radiusChange(e) {
          this.props.radiusChange(+e.target.value);
    }
    render() {
        let {typeDots,radiusDots} = this.props.dots;
        let range = (
          <label> radius
           <input type = "range"
                  onChange = {this.radiusChange}
                  value = {radiusDots}
                  min = {4}
                  max = {25}
                  step = {1}
                  />
          </label>
        );
        return (
            <div className = "settingsDotsContainer">
            <hr/>
            <span>type dots</span>
            <select  onChange = {this.dotsChange} defaultValue = {"circle"}>
              <option value = {"circle"}>circle</option>
              <option value = {"cross"}>cross</option>
              <option value = {"diamond"}>diamond</option>
              <option value = {"square"}>square</option>
              <option value = {"triangle-down"}>triangle-down</option>
              <option value = {"triangle-up"}>triangle-up</option>
            </select>
            {typeDots === "circle" ? range : null}
            </div>
        );
    }
}

export default connect(
      state => ({
          dots:state.settingsDots,
      }),
      dispatch => ({
          dotsChange:(val) => {
              dispatch({type:"DOTS_TYPE",payload:val})
          },
          radiusChange:(val) => {
              dispatch({type:"DOTS_RADIUS",payload:val})
          },

      })
)(SettingsDots);
