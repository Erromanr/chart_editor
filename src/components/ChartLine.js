import React , {Component} from "react";
import {Chart,Lines ,Layer,Ticks,Dots,Transform,Title} from "rumble-charts";
import {connect} from "react-redux";

class ChartLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {sufix,prefix,format} = this.props.numberFormat;
        let {reverseX,reverseY} = this.props.axis;
        return (
          <Chart width={this.props.width}
                 height={this.props.height}
                 series={this.props.series}
                 minY={0}
                 scaleY = {reverseX}
                 scaleX = {reverseY}
                 >
          <Layer width = "80%" height = "80%" position = "middle center" >
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
              <Lines asAreas={this.props.area} interpolation = {this.props.interpol}/>
              <Dots dotVisible = {this.props.points}/>
              </Transform>
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
        data:state.dataTable.grid,
        series:state.dataTable.data,
        title:state.textTitle,
    }),
    dispatch => ({

    })
)(ChartLine);
