import React , {Component} from "react";
import {Chart,Lines ,Layer,Ticks,Dots,Transform,Title,Animate} from "rumble-charts";
import {connect} from "react-redux";

class ChartLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {sufix,prefix,format} = this.props.numberFormat;
        let {reverseX,reverseY} = this.props.axis;
        let {point,monotone} = this.props.settingsLine;
        let {labelX,labelY} = this.props.label;
        return (
          <div>
          <Chart width={this.props.width}
                 height={this.props.height}
                 series={this.props.series}
                 minY={0}
                 scaleY = {reverseX}
                 scaleX = {reverseY}

                 >
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
          <Layer width = "85%" height = "60%" position = "middle right" >
            <Transform method = {this.props.transform}>
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
              <Lines asAreas={this.props.area}
                     interpolation = {this.props.interpol}
                     colors = {this.props.colors}
                     />
              <Dots dotVisible = {this.props.points}
                    colors = {this.props.colors}/>

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
