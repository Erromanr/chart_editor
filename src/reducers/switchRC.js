let initialState = false
export default function numberFormat(state = initialState,action) {
    if(action.type ==="SWITCH_ROWS_COLUMNS") {
        return action.payload;
    }
    return state;
}
