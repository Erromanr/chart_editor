let initialState = {
  height:300,
  width:600,
};
export default function chartsSize(state = initialState,action) {
    if(action.type ==="CHART_HEIGHT") {
        return  Object.assign({},state,{height:action.payload});
    }
    if(action.type === "CHART_WIDTH") {
        return Object.assign({},state,{width:action.payload});
    }
    return state;
}
