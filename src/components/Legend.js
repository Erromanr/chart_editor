import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/Legend.css";

function Legend(props) {
    const {one,oneColor,colors}  = props.color;
    const {nameList} = props.name;
    const {width} = props.size;
    let result  = [];
    let x = 20;
    let y = 25;

    if(props.legendStatus) {
      for(let i in nameList) {
          result.push(
            <g>
            <circle cx= {x + 85*i} cy= {y} r="10" fill = {oneColor ? one[0] : colors[i]}/>
            <text   x = {x + 85*i + 15} y = {y + 5}> {nameList[i]}</text>
            </g>
          )

      }
    }
    return (
      <g textAnchor ="center">
         {result}
      </g>
    )
}

export default connect(
    state => ({
        name:state.dataTable,
        color:state.colors,
        size:state.chartsSize,
        legendStatus:state.legend,
    }),
    dispatch => ({

    })
)(Legend);
