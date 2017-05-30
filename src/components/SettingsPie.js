import React , {Component} from "react";
import {connect} from "react-redux";
import {Toggle,Slider} from 'material-ui';

class SettingsPie extends Component {
    constructor(props) {
        super(props);
        this.handleRange = this.handleRange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleRange(event,value) {
        this.props.range(value);
    }
    handleCheck(e) {
        this.props.check(e.target.checked);
    }
    render() {
        let {radius,combined} = this.props.pie;
        const styles = {
            root: {
              display: 'flex',
              height: 40,
              paddingLeft:20,
              flexDirection: 'column',

              alignItems:"start",
            },
        }
        let checkboxLabel  = {
            color:"silver",
        }
        return (
            <div>

            <div style = {styles.root}>
              <span> Pie radius </span>
              <Slider style = {{height:20,width:200,}}
                      sliderStyle = {{margin:0}}
                      onChange = {this.handleRange}
                      min={0}
                      max={100}
                      step={1}
                      value = {radius}
                     />
            </div>


                <Toggle label  = "combined"
                        labelPosition = "right"
                        onToggle = {this.handleCheck}
                        toggled = {combined}
                        style = {{paddingLeft:20}}
                        labelStyle = {checkboxLabel}
                       />

            </div>
        );
    }
}


export default connect(
    state => ({
        pie:state.settingsPie,
    }),
    dispatch => ({
        range:(value) => {
            dispatch({type:"PIE_INNER_RADIUS",payload:value});
        },
        check:(value) => {
            dispatch({type:"PIE_COMBINED",payload:value})
        },
    })

)(SettingsPie)
