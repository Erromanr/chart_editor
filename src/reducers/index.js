import {combineReducers} from "redux";
import chartsType from "./chartsType";
import pieInnerRadius from "./pieInnerRadius";
import axisChart from "./axisChart";
import chartsSize from "./chartsSize";
import numberFormat from "./numberFormat";
import activeTabs from "./activeTabs";
import dataTable from "./dataTable";
import activeDataTable from "./activeDataTable";
import textTitle from "./textTitle";
import settingsLine from "./settingsLine";
import switchRC from "./switchRC";
import colors from "./colors";
import axisLabel from "./axisLabel";

export default combineReducers({
  pieInnerRadius,
  axisLabel,
  colors,
  switchRC,
  settingsLine,
  textTitle,
  activeDataTable,
  dataTable,
  activeTabs,
  numberFormat,
  chartsSize,
  axisChart,
  chartsType,
})
