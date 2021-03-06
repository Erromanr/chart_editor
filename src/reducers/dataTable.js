import tableData from "../tableData";
import convertData from "../convertData";
import convertDataReverse from "../convertDataReverse";
import {series,seriesPie} from "../data";
let initialState = {
  grid:tableData,
  data:series,
  nameList:["gold","silver","bronze"],
};
export default function dataTable(state = initialState,action) {
    if(action.type === "TEST") {
      let row = action.payload[1];
      let column = action.payload[2];
      let data = action.payload[3];
        let newObj = Object.assign({},state);
      newObj.grid[row][column].value = data;
      return newObj;

    }
    if(action.type === "CONVERT_DATA") {
      let dataC = state.grid.concat();
      let dataConvert = convertData(dataC);

      let newObj = Object.assign({},state);

      newObj.data = dataConvert.data;
      newObj.nameList = dataConvert.nameList;
      return newObj;
    }
    if(action.type === "CONVERT_DATA_REVERSE") {
      let dataC = state.grid.concat();
      let dataConvert = convertDataReverse(dataC);
      let newObj = Object.assign({},state);
      newObj.data = dataConvert.data;
      newObj.nameList = dataConvert.nameList
      return newObj;
    }
    return state;
}
