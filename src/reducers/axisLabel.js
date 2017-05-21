let initialState  = {
  labelX:"",
  labelY:"",
}

export default function axisLabel(state = initialState,action) {
    if(action.type === "AXIS_LABEL_X") {
        return Object.assign({},state,{labelX:action.payload});
    }
    if(action.type === "AXIS_LABEL_Y") {
        return Object.assign({},state,{labelY:action.payload});
    }
    return state;
}
