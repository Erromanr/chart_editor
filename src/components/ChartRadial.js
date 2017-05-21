import React , {Component} from "react";
import {connect} from "react-redux";
import {RadialLines,Chart,Transform,Layer,Ticks,Title,Dots} from "rumble-charts";
import ChartPie from "./ChartPie";
class ChartRadial extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {series} = this.props;
        let {sufix,prefix,format} = this.props.numberFormat;
        let {reverseX,reverseY} = this.props.axis;
        return (
          <Chart width={this.props.width}
                 height={this.props.height}
                 series={this.props.series}
                 minY={0}
                 scaleY = {reverseX}
                 scaleX = {reverseY}
                 children = {<ChartPie />}
                 >
                 <Layer width = "100%" height ="20%" position = "top center">
                     <Title
                     style = {{fill:"red",fontSize:"40px",textAnchor:'middle',dominantBaseline:"text-before-edge"}}
                     >
                      {this.props.title}
                    </Title>
                </Layer>
                 <Layer width = "100%" height = "80%" position = "bottom center" >
                   <Transform method = {this.props.transform}>
                       <RadialLines
                       interpolation='linear-closed'
                       lineWidth={2}
                       asAreas={this.props.area}
                       />


                     </Transform>
                 </Layer>
              </Chart>
        );
    }
}


export default connect(
    state => ({
        series:state.dataTable.data,
        axis:state.axisChart,
        numberFormat:state.numberFormat,
        title:state.textTitle,

    }),
    dispatch => ({

    })
)(ChartRadial);
