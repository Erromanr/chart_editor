let initialState = {
  height:500,
  width:700,
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
