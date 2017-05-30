import React , {Component} from "react";
import {connect} from "react-redux";
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import "../style/TableForData.css";

class TableForData extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }
    change(...mass) {
        this.props.changeData(mass);
        if(this.props.checkConverter) {
            this.props.convertSwitchData();

        }
        else {
            this.props.convertData();
        }
    }
    render() {
        let pie = (
          <ReactDataSheet
            className = "tableForDataCell"
            data={this.props.data}
            valueRenderer={(cell) => cell.value}
            onChange= {this.change}
          />
        )
      
        return (
          <div className = "tableForDataContainer">
              {pie}
          </div>
        );

    }
}

export default connect(
    state => ({
        data:state.dataTable.grid,
        dataPie:state.dataTable.gridPie,
        checkConverter:state.switchRC,
        type:state.chartsType,
    }),
    dispatch => ({
        changeData:(value) => {
            dispatch({type:"TEST",payload:value})
        },
        convertData:() => {
            dispatch({type:"CONVERT_DATA"});
        },
        convertSwitchData:() => {
            dispatch({type:"CONVERT_DATA_REVERSE"})
        }

    })
)(TableForData);
