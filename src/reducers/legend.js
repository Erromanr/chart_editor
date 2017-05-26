let initialState = true;

export default function legend(state = initialState,action) {
    if(action.type === "LEGEND")  {
        return action.payload;
    }
    return state;
}
