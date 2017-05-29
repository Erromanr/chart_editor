import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsDots.css";
import {Slider} from 'material-ui';
class SettingsDots extends Component {
    constructor(props) {
        super(props);
        this.dotsChange = this.dotsChange.bind(this);
        this.radiusChange = this.radiusChange.bind(this);
    }

    dotsChange(e) {
          this.props.dotsChange(e.target.value);
    }

    radiusChange(event , value) {
          this.props.radiusChange(value);
    }
    render() {
      const styles = {
          root: {
            display: 'flex',
            height: 40,
            paddingLeft:20,
            flexDirection: 'column',

            alignItems:"start",
          },
        }
        let {typeDots,radiusDots} = this.props.dots;
        let range = (
          <div style = {styles.root}>
            <span>Radius</span>
             <Slider style = {{width:200,height:20}}
                    sliderStyle = {{margin:0}}
                    onChange = {this.radiusChange}
                    value = {radiusDots}
                    min = {4}
                    max = {25}
                    step = {1}

                    />

          </div>
        );
        return (
            <div className = "settingsDotsContainer">
            <div className = "dotsSelect">
              <span>type dots</span>
              <select  onChange = {this.dotsChange} defaultValue = {"circle"} style = {{width:200}}>
                <option value = {"circle"}>circle</option>
                <option value = {"cross"}>cross</option>
                <option value = {"diamond"}>diamond</option>
                <option value = {"square"}>square</option>
                <option value = {"triangle-down"}>triangle-down</option>
                <option value = {"triangle-up"}>triangle-up</option>
              </select>
            </div>
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
