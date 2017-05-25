import {combineReducers} from "redux";
import chartsType from "./chartsType";
import settingsPie from "./settingsPie";
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
import settingsDots from "./settingsDots";
import settingsBar from "./settingsBar";

export default combineReducers({
  settingsPie,
  settingsBar,
  settingsDots,
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
