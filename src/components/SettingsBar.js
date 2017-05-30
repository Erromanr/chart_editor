import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/SettingsBar.css"
import {Slider} from 'material-ui';

class SettingsBar extends Component {
    constructor(props) {
        super(props);
        this.innerChange = this.innerChange.bind(this);
        this.groupChange = this.groupChange.bind(this);
    }

    innerChange(event,value) {
        this.props.inner(value);
    }

    groupChange(event,value) {
        this.props.group(value);
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
        let {inner,group} = this.props.bar;
        let stacked ;
        let style = {
            width:"100%",
            height:"50px",
        }
        if(this.props.type === "bar" || this.props.type === "barRow") {
          
            stacked = (
              <div style = {styles.root}>
              <span> group padding </span>
                  <Slider style = {{height:20,width:200}}
                          sliderStyle = {{margin:0}}
                          value = {group}
                          onChange = {this.groupChange}
                          min = {0}
                          max = {10}
                          step = {0.5}
                          />
              </div>
            );
        }
        else {
            stacked = null;
        }
        return (
            <div className = "settingsBarContainer">
                <div style = {styles.root}>
                <span> inner padding</span>
                    <Slider style = {{height:20,width:200}}
                            sliderStyle = {{margin:0}}
                            value = {inner}
                            onChange = {this.innerChange}
                            min = {0.2}
                            max = { 4}
                            step = {0.1}
                            />
                </div>
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
