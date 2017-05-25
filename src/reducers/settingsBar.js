let initialState = {
    inner:1,
    group:3,
}

export default function settingsBar(state = initialState,action) {
    if(action.type === "BAR_PADDING_INNER") {
        return Object.assign({},state,{inner:action.payload});
    }
    if(action.type === "BAR_PADDING_GROUP") {
        return Object.assign({},state,{group:action.payload});
    }
    return state
}
