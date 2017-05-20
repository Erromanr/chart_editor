import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsColor.css";
class SettingsColor extends Component {
    constructor(props) {
        super(props);
        this.handleLink = this.handleLink.bind(this);
        this.changeColors = this.changeColors.bind(this);
    }
    handleLink(e) {
        e.preventDefault();
        this.props.active();
    }
    changeColors(e) {
        let obj = {
            id:+e.target.id,
            value:e.target.value,
        };
        console.log(obj)
        this.props.changePicker(obj)

    }
    render() {
        let {data,activeTab,colors} = this.props;
        let names =[];
        for(let i = 0 ; i < data.length ;  i++) {
                names.push(
                  <div key = {data[i]}>
                      <label>
                      <input id = {i}
                             type = "color"
                             value = {colors[i]}
                             onChange = {this.changeColors}/>
                      {data[i]}
                      </label>
                  </div>
                );
            }
        
        return (
            <div className = "color">
              <a href = "/" onClick = {this.handleLink} style = {{textDecoration:"none"}}>
              <div className = "settingsTabsButton">
                  Colors
              </div>
              </a>
              {activeTab ? names : null}
            </div>
        );
    }
}


export default connect(
    state => ({
          data:state.dataTable.nameList,
          activeTab:state.activeTabs.colors,
          colors:state.colors,
    }),
    dispatch => ({
          active:() => {
              dispatch({type:"ACTIVE_COLORS_TAB"})
          },
          changePicker:(obj) => {
              dispatch({type:"CHANGE_COLORS",payload:obj})
          },
    })
)(SettingsColor);
