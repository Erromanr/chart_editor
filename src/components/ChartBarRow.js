import React , {Component} from "react";
import {connect} from "react-redux";
import {Bars,Chart,Layer , Ticks,Transform} from "rumble-charts";
import series from "../data";

class ChartBarRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {sufix,prefix} = this.props.numberFormat;
        return (
          <Chart width={this.props.width}
                 height={this.props.height}
                 series={series}
                 minY={0}
                 minX = {0}
                  >
              <Layer width = "80%" height = "80%" position = "middle center" >
                <Transform method = {this.props.transform} >
                <Ticks
                  axis='y'
                  lineLength='90%'
                  lineOffset = "10%"
                  labelFormat = {(label) => `${sufix} ${label} ${prefix}`}
                  lineVisible={this.props.axis.y}
                  lineStyle={{stroke:'lightgray'}}
                  labelStyle={{textAnchor:'middle',dominantBaseline:'text-before-edge',fill:'lightgray'}}
                  ticks = {this.props.axis.tiksY}
                  />
                  <Ticks
                    axis='x'
                    lineLength='100%'
                    lineVisible={this.props.axis.x}
                    lineStyle={{stroke:'lightgray'}}
                    labelStyle={{textAnchor:'end',dominantBaseline:'middle',fill:'lightgray'}}
                    ticks = {this.props.axis.tiksX}
                    />

                    <Bars colors='category10'
                          innerPadding='0.5%'
                          groupPadding = "3%"
                          combined = {this.props.combined}
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
  }),
  dispatch => ({

  })
)(ChartBarRow);
