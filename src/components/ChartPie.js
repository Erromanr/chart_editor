import React, { Component } from 'react';
import {connect} from "react-redux";
import '../style/MenuBar.css';
import {Chart,Pies,Transform,Title,Layer,Labels} from "rumble-charts";

import LegendPie from "./LegendPie";

class ChartPie extends Component {
  render() {
      let {colors,oneColor,one,fontColor} = this.props.colors;
      let {radius,combined} = this.props.pie;
      let style = {
          display:"flex",
          flexDirection:"row",
            justifyContent:"space-around",
      }
    return (
        <Chart width={this.props.width}
               height={this.props.height}
               series={this.props.series}
               id = "chart"
               >
           <Layer width = "100%" height ="10%" position = "top center">
               <Title
               style = {{fill:fontColor,fontSize:"40px",textAnchor:'middle',dominantBaseline:"text-before-edge"}}
               >
                {this.props.title}
              </Title>
          </Layer>
          <Layer width = "85%" height ="10%" position = "bottom right" >

          </Layer>
          <Layer width = "80%" height = "80%" position = "middle center" >
          <Transform method={['transpose', 'stack']}>
            <Pies combined={combined}
                  innerRadius = {radius}
                  colors = {oneColor ? one : colors}

                />

          </Transform>
         </Layer>

        </Chart>
    );
  }
}

export default connect(
    state => ({
          pie:state.settingsPie,
          series:state.dataTable.data,
          title:state.textTitle,
          colors:state.colors,
    }),
    dispatch => ({

    })
)(ChartPie);
