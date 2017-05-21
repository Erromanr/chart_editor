import React, { Component } from 'react';
import {connect} from "react-redux";
import '../style/MenuBar.css';
import {Chart,Pies,Transform,Title,Layer} from "rumble-charts";
import series from "../data";
class ChartPie extends Component {
  render() {

    return (
        <Chart width={this.props.width}
               height={this.props.height}
               series={this.props.series}
               >
           <Layer width = "100%" height ="20%" position = "top center">
               <Title
               style = {{fill:"red",fontSize:"40px",textAnchor:'middle',dominantBaseline:"text-before-edge"}}
               >
                {this.props.title}
              </Title>
          </Layer>
          <Layer width = "80%" height = "80%" position = "bottom center" >
          <Transform method={['transpose', 'stack']}>
            <Pies combined={true}
                  innerRadius = {this.props.innerRadius}
                  colors = {this.props.colors}
                />

          </Transform>
         </Layer>
        </Chart>
    );
  }
}

export default connect(
    state => ({
          innerRadius:state.pieInnerRadius,
          series:state.dataTable.data,
          title:state.textTitle,
          colors:state.colors,
    }),
    dispatch => ({

    })
)(ChartPie);
