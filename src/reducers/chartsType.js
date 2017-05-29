let initialState = "line";
export default function chartsType(state = initialState,action) {
    if(action.type ==="PIE") {
        return  action.payload;
    }
    if(action.type === "BAR") {
        return action.payload;
    }
    if(action.type === "LINE") {
        return action.payload;
    }
    if(action.type === "DOTS") {
        return action.payload;
    }
    if(action.type === "BAR_STACKED") {
        return action.payload;
    }
    if(action.type === "BAR_ROW") {
        return action.payload;
    }
    if(action.type === "BAR_ROW_STACKED") {
        return action.payload;
    }
    if(action.type === "AREA") {
        return action.payload;
    }
    if(action.type === "AREA100") {
        return action.payload;
    }
    if(action.type === "AREA_STACKED") {
        return action.payload;
    }
    if(action.type === "CHANGE_TYPE_CHART") {
        return action.payload;
    }
    return state;
}
