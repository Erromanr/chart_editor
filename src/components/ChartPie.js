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
          <Layer width = "80%" height = "80%" position = "middle center" >
          <Transform method={['transpose', 'stack']}>
            <Pies combined={true}
                  innerRadius = {this.props.innerRadius}
                  colors = {this.props.colors}
                />

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
          innerRadius:state.pieInnerRadius,
          series:state.dataTable.data,
          title:state.textTitle,
          colors:state.colors,
    }),
    dispatch => ({

    })
)(ChartPie);
