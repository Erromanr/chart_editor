import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsBar.css"

class SettingsBar extends Component {
    constructor(props) {
        super(props);
        this.innerChange = this.innerChange.bind(this);
        this.groupChange = this.groupChange.bind(this);
    }

    innerChange(e) {
        this.props.inner(+e.target.value);
    }

    groupChange(e) {
        this.props.group(+e.target.value);
    }

    render() {
        let {inner,group} = this.props.bar;
        let stacked ;
        if(this.props.type === "bar" || this.props.type === "barRow") {
            console.log("lskadfjksdfj")
            stacked = (
              <label> group padding
                  <input type = "range"
                          value = {group}
                          onChange = {this.groupChange}
                          min = {0}
                          max = {10}
                          step = {0.5}
                          />
              </label>
            );
        }
        else {
            stacked = null;
        }
        return (
            <div className = "settingsBarContainer">
                <hr/>
                <span>settings bar</span>
                <label> inner padding
                    <input type = "range"
                            value = {inner}
                            onChange = {this.innerChange}
                            min = {0.2}
                            max = { 4}
                            step = {0.1}
                            />
                </label>
                {stacked}
            </div>
        );
    }
}


export default connect(
    state => ({
       bar:state.settingsBar,
       type:state.chartsType,
    }),
    dispatch => ({
        inner:(val) => {
            dispatch({type:"BAR_PADDING_INNER",payload:val})
        },
        group:(val) => {
            dispatch({type:"BAR_PADDING_GROUP",payload:val})
        },
    })
)(SettingsBar)
