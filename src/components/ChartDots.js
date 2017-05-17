import React , {Component} from "react";
import {Chart,Dots,Lines ,Layer,Ticks,Title} from "rumble-charts";
import {connect} from "react-redux";

import series from "../data";

class ChartDots extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {sufix,prefix,format} = this.props.numberFormat;
        let {reverseX,reverseY} = this.props.axis;
        return(
          <Chart width={this.props.width}
                 height={this.props.height}
                 series={this.props.series}
                 minY={0}
                 scaleY = {reverseX}
                 scaleX = {reverseY}
                 >
          <Layer width = "80%" height = "80%" position = "middle center" >
          <Ticks
            axis='y'
            lineLength='100%'
            labelFormat = {(label) => `${sufix} ${label*(format*1000)/1000} ${prefix}`}
            lineVisible={this.props.axis.y}
            lineStyle={{stroke:'lightgray'}}
            labelStyle={{textAnchor:'end',dominantBaseline:'middle',fill:'lightgray'}}
            ticks = {this.props.axis.tiksY}
            />
            <Ticks
              axis='x'
              lineLength='100%'
              lineOffset = "-100%"
              label={({index, props}) => props.series[index].name}
              lineVisible={this.props.axis.x}
              lineStyle={{stroke:'lightgray'}}
              labelStyle={{textAnchor:'middle',dominantBaseline:'text-before-edge',fill:'lightgray'}}

              />
            <Dots dotType = "dot"/>
            <Title position='top center'
            style = {{fill:"red",fontSize:"40px",textAnchor:'middle'}}
            >
             {this.props.title}
           </Title>
          </Layer>
          </Chart>
        );
    }
}


export default connect(
    state => ({
        axis:state.axisChart,
        numberFormat:state.numberFormat,
        series:state.dataTable.data,
        title:state.textTitle,
    }),
    dispatch => ({

    })
)(ChartDots);
