import React , {Component} from "react";
import {connect} from "react-redux";

class SettingsSize extends Component {
    constructor(props) {
        super(props);
        this.handleHeigth = this.handleHeigth.bind(this);
        this.handleWidth = this.handleWidth.bind(this);
    }
    handleHeigth(e) {
        this.props.heigth(+e.target.value);
    }
    handleWidth(e) {
        this.props.width(+e.target.value);
    }
    render() {
        let style = {
            display:"flex",
            flexDirection:"column",
            paddingLeft:20,
        }
        return(
            <div style = {style}>
                <label>
                <input type = "number"
                       min = "0"
                       max = "1000"
                       step = {5}
                       onChange = {this.handleHeigth}
                       value = {this.props.size.height}
                       />Height
                </label><br/>
                <label>
                <input type = "number"
                       min = "0"
                       max = "1000"
                       step = {5}
                       onChange = {this.handleWidth}
                       value = {this.props.size.width}
                       />Width
                </label>
            </div>
        );
    }
}

export default connect(
    state => ({
      size:state.chartsSize
    }),
    dispatch => ({
        heigth:(value) => {
            dispatch({type:"CHART_HEIGHT",payload:value});
        },
        width:(value) => {
            dispatch({type:"CHART_WIDTH",payload:value});
        }
    })
)(SettingsSize);
