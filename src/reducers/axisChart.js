let initialState  = {
  x:true,
  y:true,
  tiksX:10,
  tiksY:10,
  reverseValueX:false,
  reverseValueY:false,
  reverseX:{
    direction:0
  },
  reverseY:{
    direction:0
  },
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
    if(action.type === "REVERSE_X") {
        let value = action.payload ? (-1) : 0;
        return Object.assign({},state,{reverseX:{direction:value}},{reverseValueX:action.payload});
    }
    if(action.type === "REVERSE_Y") {
        let value = action.payload ? (-1) : 0;
        return Object.assign({},state,{reverseY:{direction:value}},{reverseValueY:action.payload});
    }
    return state;
}
