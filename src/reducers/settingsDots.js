let initialState  = {
    typeDots:"circle",
    radiusDots:4,
}

export default function settingsDots(state = initialState,action) {
    if(action.type === "DOTS_TYPE") {
        return Object.assign({},state,{typeDots:action.payload});
    }
    if(action.type === "DOTS_RADIUS") {
        return Object.assign({},state,{radiusDots:action.payload});
    }
    return state;
}
