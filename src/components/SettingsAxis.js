import React , {Component} from "react";
import {connect} from "react-redux";
import  "../style/SettingsAxis.css";
import "../style/SettingsTabs.css";
import {Toggle} from 'material-ui';

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
        this.changeLabelX = this.changeLabelX.bind(this);
        this.changeLabelY = this.changeLabelY.bind(this);
    }
    changeLabelX(e) {
        let val = this.refs.labelX.value;
        this.props.labelX(val);
    }
    changeLabelY(e) {
        let val = this.refs.labelY.value;
        this.props.labelY(val);
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
        let {labelX,labelY} = this.props.label;
        let {value} = this.props;
        let disabled  = false;
        let checkboxLabel  = {
            color:"silver",
        }
        if( value === "barRowStacked" || value === "barRow") {

            disabled = true;
        }
        let tab = (
          <div className = "settingsAxisBlock" >

              <Toggle label = "axis Y"
                      labelPosition = "right"
                      onToggle = {this.handleY}
                      toggled = {y}
                      labelStyle = {checkboxLabel}
                      />

            <label>
              <input type = "number"
                     onChange = {this.handleTicksY}
                     min = "0"
                     value = {this.props.axis.tiksY}
                     max = "20"

                     />ticks Y
            </label>

              <Toggle  label = "axis X"
                       onToggle = {this.handleX}
                       toggled= {x}
                       labelPosition = "right"
                       labelStyle = {checkboxLabel}
                       />


            <div>

                  <Toggle label = "Reverse X"
                          labelPosition = "right"
                          onToggle= {this.reverseX}
                          toggled = {reverseValueX}
                          labelStyle = {checkboxLabel}
                          />


                  <Toggle label = "Reverse Y"
                          labelPosition = "right"
                          onToggle = {this.reverseY}
                          toggled = {reverseValueY}
                          disabled = {disabled}
                          labelStyle = {checkboxLabel}
                          />

            </div>
            <div className = "axisLabel">
                <span> Label X </span>
                  <input type = "text"
                         onChange = {this.changeLabelX}
                         value = {labelX}
                         className = "settingsAxisInput"
                         ref = "labelX"
                         placeholder = "enter text"
                         />

                <span> Label Y </span>
                    <input type = "text"
                           onChange = {this.changeLabelY}
                           value = {labelY}
                           className = "settingsAxisInput"
                           ref = "labelY"
                            placeholder = "enter text"
                           />

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
        label:state.axisLabel,
        active:state.activeTabs.axis,
        value:state.chartsType,
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
      labelX:(value) => {
          dispatch({type:"AXIS_LABEL_X",payload:value});
      },
      labelY:(value) => {
          dispatch({type:"AXIS_LABEL_Y",payload:value});
      }

    })
)(SettingsAxis);
