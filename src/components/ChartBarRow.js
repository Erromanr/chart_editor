import React , {Component} from "react";
import {connect} from "react-redux";
import {Bars,Chart,Layer , Ticks,Transform,Title,Animate} from "rumble-charts";
import series from "../data";

class ChartBarRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {sufix,prefix,format} = this.props.numberFormat;
        let {reverseX,reverseY} = this.props.axis;
        let {labelX,labelY} = this.props.label;
        let {colors,oneColor,one} = this.props.colors;
        return (
          <Chart width={this.props.width}
                 height={this.props.height}
                 series={this.props.series}
                 minY={0}
                 scaleY = {reverseY}
                 scaleX = {reverseX}
                  >

          <Transform method = {this.props.transform} >
                <Layer width = "100%" height ="10%" position = "top center">
                    <Title
                    style = {{fill:"red",fontSize:"40px",textAnchor:'middle',dominantBaseline:"text-before-edge"}}
                    >
                     {this.props.title}
                   </Title>
               </Layer>
               <Layer width = "100%" height ="10%" position = "bottom center">
                   <Title
                   style = {{fill:"red",fontSize:"20px",textAnchor:'middle',dominantBaseline:"middle"}}
                   >
                    {labelX}
                  </Title>
              </Layer>
              <Layer width = "10%" height ="10%" position = "middle left">
                  <Title
                  style = {{fill:"red",fontSize:"20px",
                            textAnchor:"middle",
                            dominantBaseline:"middle",
                             writingMode:"tb"}}
                  >
                   {labelY}
                 </Title>
             </Layer>
              <Layer width = "80%" height = "60%" position = "middle right" >

                <Ticks
                  axis='y'
                  lineLength='100%'
                  labelFormat = {(label) => `${sufix} ${label*(format*1000)/1000} ${prefix}`}
                  lineVisible={this.props.axis.y}
                  lineStyle={{stroke:'lightgray'}}
                  labelStyle={{textAnchor:'middle',dominantBaseline:'text-after-edge',fill:'lightgray'}}
                  ticks = {this.props.axis.tiksY}
                  />
                  <Ticks
                    axis='x'
                    lineLength='100%'
                    lineVisible={this.props.axis.x}
                    label={({index, props}) => props.series[index].name}
                    lineStyle={{stroke:'lightgray'}}
                    labelStyle={{textAnchor:'end',dominantBaseline:'middle',fill:'lightgray'}}

                    />

                    <Bars colors='category10'
                          innerPadding='0.5%'
                          groupPadding = "3%"
                          combined = {this.props.combined}
                          colors = {oneColor ? one : colors}
                          />
              </Layer>

              </Transform >

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
  }),
  dispatch => ({

  })
)(ChartBarRow);
