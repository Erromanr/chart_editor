import React , {Component} from "react";
import {connect} from "react-redux";
import "../style/Legend.css";

function Legend(props) {
    const {one,oneColor,colors,fontColor}  = props.color;
    const {nameList} = props.name;
    const {width} = props.size;
    let result  = [];
    let padd = nameList.length < 7 ? width*0.85/nameList.length  : width*0.85/7;
    let x = 20;
    let y = 15;

    //fucking bad , but worcking

    if(props.legendStatus) {
      for(let i in nameList) {
          if( i < 7) {
              result.push(
                <g>
                <circle cx= {x + padd*i} cy= {y} r="10" fill = {oneColor ? one[0] : colors[i]}/>
                <text   x = {x + padd*i + 15} y = {y + 5} fill = {fontColor}> {nameList[i]}</text>
                </g>
              )
          }
          else {
            result.push(
              <g>
              <circle cx= {x + padd*(i - 7)} cy= {y +25} r="10" fill = {oneColor ? one[0] : colors[i]}/>
              <text   x = {x + padd*(i - 7) + 15} y = {y + 30} fill = {fontColor}> {nameList[i]}</text>
              </g>
            )
          }

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
