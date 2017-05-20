let initialState = false
export default function switchRC(state = initialState,action) {
    if(action.type ==="SWITCH_ROWS_COLUMNS") {
        return action.payload;
    }
    return state;
}
