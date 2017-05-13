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
        return(
            <div>
                <input type = "number"
                       min = "0"
                       max = "1000"
                       step = {5}
                       onChange = {this.handleHeigth}
                       value = {this.props.size.height}
                       />
                <input type = "number"
                       min = "0"
                       max = "1000"
                       step = {5}
                       onChange = {this.handleWidth}
                       value = {this.props.size.width}
                       />

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
