import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsNumberFormat.css";
import "../style/SettingsTabs.css";

class SettingsNumberFormat extends Component {
    constructor(props) {
        super(props);
        this.changeSufix = this.changeSufix.bind(this);
        this.changePrefix = this.changePrefix.bind(this);
        this.handleTab = this.handleTab.bind(this);
        this.selectChange = this.selectChange.bind(this);
    }
    changeSufix(e) {
        this.props.sufix(this.refs.sufix.value);
    }
    changePrefix(e) {
        this.props.prefix(this.refs.prefix.value);
    }
    handleTab(e) {
        e.preventDefault();
        this.props.active();
    }
    selectChange(e) {
        this.props.format(e.target.value);
        console.log(e.target.value);
    }
    render() {
        let link = {textDecoration:"none"};
        let tab = (
          <div className = "settingsNmberTab">

              <label> sufix
              <input type = "text"
                     ref = "sufix"
                     onChange = {this.changeSufix}
                     value = {this.props.number.sufix}/>
              </label>
              <select onChange = {this.selectChange}>
                <option value = {100}>100</option>
                <option value = {10}>10</option>
                <option selected value = {1}>without changes</option>
                <option value = {0.1}>0.1</option>
                <option value = {0.01}>0.01</option>
              </select>
              <label> prefix
              <input type = "text"
                     ref = "prefix"
                     onChange = { this.changePrefix}
                     value = {this.props.number.prefix}/>
              </label>
          </div>
        );
        return (
            <div className = "settingsNumberFormatContainer">
              <a href = "/" onClick = {this.handleTab} style = {link} >
              <div className = "settingsTabsButton">
                  Number Format
              </div>
              </a>
              {this.props.activeTab ? tab : null}
            </div>
        );
    }
}


export default connect(
    state => ({
        activeTab:state.activeTabs.numberFormat,
        number:state.numberFormat,
    }),
    dispatch =>({
        sufix:(value) => {
            dispatch({type:"NUMBER_SUFIX",payload:value})
        },
        prefix:(value) => {
            dispatch({type:"NUMBER_PREFIX",payload:value})
        },
        active:() => {
            dispatch({type:"ACTIVE_NUMBER_TAB"});
        },
        format:(value) => {
            dispatch({type:"NUMBER_FORMAT",payload:value});
        },

    })
)(SettingsNumberFormat);
