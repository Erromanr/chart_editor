import React , {Component} from "react";
import {connect} from "react-redux";
import  "../style/SettingsAxis.css";
import "../style/SettingsTabs.css";

class SettingsAxis extends Component {
    constructor(props) {
        super(props);
        this.handleY = this.handleY.bind(this);
        this.handleTicksY = this.handleTicksY.bind(this);
        this.handleX = this.handleX.bind(this);
        this.handleTicksX = this.handleTicksX.bind(this);
        this.handleTab = this.handleTab.bind(this);
        this.reverseX = this.reverseX.bind(this);
        this.reverseY = this.reverseY.bind(this);
    }
    handleY(e) {
        this.props.axisY(e.target.checked);
        console.log(e.target.checked);
    }
    handleX(e) {
        this.props.axisX(e.target.checked);
    }
    handleTicksY(e) {
        this.props.ticksY(+e.target.value);
    }
    handleTicksX(e) {
        this.props.ticksX(+e.target.value);
    }
    handleTab(e) {
        e.preventDefault();
        this.props.ative();
    }
    reverseX(e){
        this.props.reverseX(e.target.checked);
    }
    reverseY(e){
        this.props.reverseY(e.target.checked);
    }
    render() {
        let {x,y,reverseValueY,reverseValueX} = this.props.axis;
        let link = {textDecoration:"none"};
        let tab = (
          <div className = "settingsAxisBlock" >
            <label > axis Y
              <input type = "checkbox"
                     onChange = {this.handleY}
                     checked = {y}/>
            </label>
            <label> ticks Y
              <input type = "number"
                     onChange = {this.handleTicksY}
                     min = "0"
                     value = {this.props.axis.tiksY}
                     max = "20"
                     />
            </label>
            <label > axis X
              <input type = "checkbox"
                     onChange = {this.handleX}
                     checked = {x}/>
            </label>
    
            <div>
                <label > Reverse X
                  <input type = "checkbox"
                         onChange = {this.reverseX}
                         checked = {reverseValueX}/>
                </label>
                <label >Reverse Y
                  <input type = "checkbox"
                         onChange = {this.reverseY}
                         checked = {reverseValueY}/>
                </label>
            </div>
          </div>
        );
        return (
          <div className = "settingsAxisContainer" >
          <a href = "/" onClick = {this.handleTab} style = {link}>
            <div className = "settingsTabsButton">
                Axis
            </div>
          </a>
          {this.props.active ? tab : null}
          </div>
        );
    }
}


export default connect(
    state => ({
        axis:state.axisChart,
        active:state.activeTabs.axis,
    }),
    dispatch => ({
      axisY: (value) => {
          dispatch({type:"AXIS_Y",payload:value})
      },
      ticksY:(value) => {
          dispatch({type:"TICKS_Y",payload:value})
      },
      axisX:(value) => {
          dispatch({type:"AXIS_X",payload:value});
      },
      ticksX:(value) => {
          dispatch({type:"TICKS_X",payload:value})
      },
      ative:()=> {
          dispatch({type:"ACTIVE_AXIS_TAB"})
      },
      reverseX:(value) => {
          dispatch({type:"REVERSE_X",payload:value})
      },
      reverseY:(value) => {
          dispatch({type:"REVERSE_Y",payload:value})
      },


    })
)(SettingsAxis);
