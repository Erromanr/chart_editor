import React , {Component} from "react";
import {Chart,Lines ,Layer,Ticks,Dots,Transform,Title,Animate} from "rumble-charts";
import {connect} from "react-redux";
import Legend from "./Legend";

class ChartLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {sufix,prefix,format} = this.props.numberFormat;
        let {reverseX,reverseY} = this.props.axis;
        let {point,monotone} = this.props.settingsLine;
        let {labelX,labelY} = this.props.label;
        let {colors,oneColor,one,fontColor} = this.props.colors;
        let widthChart = sufix || prefix ? "91%" : "95%";

        if (labelY) {
            widthChart = "90%";
        }
        if(sufix && labelY || prefix && labelY) {
            widthChart = "85%";
        }
        return (
          <div>
          <Chart width={this.props.width}
                 height={this.props.height}
                 series={this.props.series}
                 minY={0}
                 scaleY = {reverseX}
                 scaleX = {reverseY}

                 >
           <Layer width = "100%" height ="10%" position = "top right">
               <Title
               style = {{fill:"red",fontSize:"40px",textAnchor:'middle',dominantBaseline:"text-before-edge"}}
               >
                {this.props.title}
              </Title>
          </Layer>
          <Layer width = "85%" height ="10%" position = "bottom right">
              <Title
              style = {{fill:fontColor,fontSize:"20px",textAnchor:'middle',dominantBaseline:"text-after-edge"}}
              >
               {labelX}
             </Title>
         </Layer>
         <Layer width = "85%" height ="10%" position = "bottom right" >
            <Legend />
         </Layer>
         <Layer width = "10%" height ="10%" position = "middle left">
             <Title
             style = {{fill:fontColor,fontSize:"20px",
                       textAnchor:"middle",
                       dominantBaseline:"middle",
                        writingMode:"tb"}}
             >
              {labelY}
            </Title>
        </Layer>
          <Layer width = {widthChart} height = "60%" position = "middle right" >
            <Transform method = {this.props.transform}>
            <Ticks
              axis='y'
              lineLength='100%'

              labelFormat = {(label) => `${sufix} ${label*(format*1000)/1000} ${prefix}`}
              lineVisible={this.props.axis.y}
              lineStyle={{stroke:fontColor}}
              labelStyle={{textAnchor:'end',dominantBaseline:'middle',fill:fontColor}}
              ticks = {this.props.axis.tiksY}

              />
              <Ticks
                axis='x'
                lineLength='100%'
                lineOffset = "-100%"
                label={({index, props}) => props.series[index].name}
                lineVisible={this.props.axis.x}
                lineStyle={{stroke:fontColor}}
                labelStyle={{textAnchor:'middle',dominantBaseline:'text-before-edge',fill:fontColor}}

                />
              <Lines asAreas={this.props.area}
                     interpolation = {this.props.interpol}
                     colors = {oneColor ? one : colors}

                     />
              <Dots dotVisible = {this.props.points}
                  colors = {oneColor ? one : colors}/>

              </Transform>
            </Layer>

          </Chart>
          </div>
        );
    }
}

export default connect(
    state => ({
        axis:state.axisChart,
        numberFormat:state.numberFormat,
        data:state.dataTable.grid,
        series:state.dataTable.data,
        title:state.textTitle,
        settingsLine:state.settingsLine,
        colors:state.colors,
        label:state.axisLabel,
    }),
    dispatch => ({

    })
)(ChartLine);
