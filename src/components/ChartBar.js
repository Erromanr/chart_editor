import React , {Component} from "react";
import {connect} from "react-redux";
import {Bars,Chart,Layer , Ticks,Transform,Title,Labels,Dots} from "rumble-charts";
import series from "../data";
import Legend from "./Legend";

class ChartBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {sufix,prefix,format} = this.props.numberFormat;
        let {reverseX,reverseY} = this.props.axis;
        let {labelX,labelY} = this.props.label;
        let {colors,oneColor,one,fontColor} = this.props.colors;
        let {inner,group} = this.props.bar;
        let widthChart = sufix || prefix ? "91%" : "95%";
        let innerPadding = inner;

        if(this.props.type === "barStacked") {
            innerPadding = innerPadding *3;
        }

        if (labelY) {
            widthChart = "90%";
        }

        if(sufix && labelY || prefix && labelY) {
            widthChart = "85%";
        }

        return (
          <Chart width={this.props.width}
                 height={this.props.height}
                 series={this.props.series}
                 minY={0}
                 minX = {0}
                 scaleY = {reverseX}
                 scaleX = {reverseY}
                  >
                  <Layer width = "100%" height ="10%" position = "top right">
                      <Title
                      style = {{fill:fontColor,fontSize:"40px",textAnchor:'middle',dominantBaseline:"text-before-edge"}}
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
                <Transform method = {this.props.transform} >
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

                    <Bars colors='category10'
                          innerPadding = {`${innerPadding}%`}
                          groupPadding = {`${group}%`}
                          combined = {this.props.combined}
                            colors = {oneColor ? one : colors}
                          />


                    </Transform >
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
      colors:state.colors,
      label:state.axisLabel,
      bar:state.settingsBar,
      type:state.chartsType,
  }),
  dispatch => ({

  })
)(ChartBar);
