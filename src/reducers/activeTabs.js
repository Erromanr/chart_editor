let initialState  = {
  axis:false,
  colors:false,
  numberFormat:false,
}

export default function activeTabs(state = initialState,action) {
    if(action.type === "ACTIVE_AXIS_TAB") {
        return Object.assign({},state , {axis:!state.axis});
    }
    if(action.type === "NOT_ACTIVE_AXIS_TAB") {
        return Object.assign({},state , {axis:false});
    }
    if(action.type === "ACTIVE_COLORS_TAB") {
        return Object.assign({},state , {colors:true});
    }
    if(action.type === "NOT_ACTIVE_COLORS_TAB") {
        return Object.assign({},state , {colors:false});
    }
    if(action.type === "ACTIVE_NUMBER_TAB") {
        return Object.assign({},state , {numberFormat:!state.numberFormat});
    }
    if(action.type === "NOT_ACTIVE_NUMBER_TAB") {
        return Object.assign({},state , {numberFormat:false});
    }
    return state;
}
