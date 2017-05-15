import {combineReducers} from "redux";
import chartsType from "./chartsType";
import pieInnerRadius from "./pieInnerRadius";
import axisChart from "./axisChart";
import chartsSize from "./chartsSize";
import numberFormat from "./numberFormat";
import activeTabs from "./activeTabs";
import dataTable from "./dataTable";
import activeDataTable from "./activeDataTable";

export default combineReducers({
  pieInnerRadius,
  activeDataTable,
  dataTable,
  activeTabs,
  numberFormat,
  chartsSize,
  axisChart,
  chartsType,
})
