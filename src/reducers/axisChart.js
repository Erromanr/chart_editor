let initialState  = {
  x:false,
  y:false,
  tiksX:0,
  tiksY:0,
}

export default function axisChart(state = initialState,action) {
    if(action.type === "AXIS_Y") {
        return Object.assign({},state , {y:action.payload});
    }
    if(action.type === "TICKS_Y") {
        return Object.assign({},state , {tiksY:action.payload});
    }
    if(action.type === "AXIS_X") {
        return Object.assign({},state , {x:action.payload});
    }
    if(action.type === "TICKS_X") {
        return Object.assign({},state , {tiksX:action.payload});
    }
    return state;
}
