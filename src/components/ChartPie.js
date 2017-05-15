import React, { Component } from 'react';
import {connect} from "react-redux";
import '../style/MenuBar.css';
import {Chart,Pies,Transform,Title} from "rumble-charts";
import series from "../data";
class ChartPie extends Component {
  render() {

    return (
        <Chart width={this.props.width}
               height={this.props.height}
               series={this.props.series}
               >
          <Transform method={['transpose', 'stack']}>
            <Pies combined={true}
                  innerRadius = {this.props.innerRadius}
                />
            
          </Transform>

        </Chart>
    );
  }
}

export default connect(
    state => ({
        innerRadius:state.pieInnerRadius,
          series:state.dataTable.data,
    }),
    dispatch => ({

    })
)(ChartPie);
