let initialState = {
    radius:0,
    combined:true,
}
export default function settingsPie(state = initialState,action) {
    if(action.type ==="PIE_INNER_RADIUS") {
      return  Object.assign({},state , {radius:action.payload});
    }
    if(action.type === "PIE_COMBINED") {
        return Object.assign({},state , {combined:action.payload});
    }

    return state;
}
