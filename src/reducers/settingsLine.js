let initialState = {
  point:true,
  monotone:false,
};
export default function settingsLine(state = initialState,action) {
    if(action.type ==="LINE_POINT") {
        return  Object.assign({},state,{point:action.payload});
    }
    if(action.type === "LINE_MOMOTONE") {
        return Object.assign({},state,{monotone:action.payload});
    }
    return state;
}
