import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsColor.css";
class SettingsColor extends Component {
    constructor(props) {
        super(props);
        this.handleLink = this.handleLink.bind(this);
        this.changeColors = this.changeColors.bind(this);
        this.oneColor = this.oneColor.bind(this);
        this.one = this.one.bind(this);
        this.fontColor = this.fontColor.bind(this);
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
    oneColor(e) {
        this.props.oneColor(e.target.checked);
    }
    one(e) {
          this.props.one(e.target.value);
    }
    fontColor(e) {
          this.props.changeFontColor(e.target.value);
    }
    render() {
        let {data,activeTab,colors,fontColor} = this.props;
        let names =[];
        let oneColor = (
            <input type = "color"
                    onChange = {this.one}
                    value = {this.props.colors.one}
                    />
        )
        for(let i = 0 ; i < data.length ;  i++) {
                names.push(
                  <div key = {data[i]}>
                      <label>
                      <input id = {i}
                             type = "color"
                             value = {colors.colors[i]}
                             onChange = {this.changeColors}/>
                      {data[i]}
                      </label>
                  </div>
                );
            }
          let menu = (
            <div>
              <div>
                  <label> One color for all
                      <input type = "checkbox"
                              onChange = {this.oneColor}
                              checked = {colors.oneColor}/>
                  </label><br/>
                  {colors.oneColor ? oneColor : null}
              </div>
              <div>
                  <span> axis and label color </span><br/>
                      <input type = "color"
                             value = {fontColor}
                             onChange = {this.fontColor}
                             />
                  <hr/>
              </div>
              <div>
              {names}
              </div>
            </div>
          );
        return (
            <div className = "color">
              <a href = "/" onClick = {this.handleLink} style = {{textDecoration:"none"}}>
              <div className = "settingsTabsButton">
                  Colors
              </div>
              </a>
            {activeTab ? menu : null}
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
          oneColor:(value) => {
              dispatch({type:"ONE_COLOR",payload:value})
          },
          one:(val) => {
              dispatch({type:"CHANGE_COLORS_ONE",payload:val})
          },
          changeFontColor:(val) => {
              dispatch({type:"FONT_COLOR",payload:val})
          },
    })
)(SettingsColor);
