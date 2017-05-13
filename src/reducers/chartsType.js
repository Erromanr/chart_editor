let initialState = "";
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
    return state;
}
