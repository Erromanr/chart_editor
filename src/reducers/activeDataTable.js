let initialState = false
export default function activeDataTable(state = initialState,action) {
    if(action.type ==="ACTIVE_DATA_TABLE") {
        return  !state;
    }
    if(action.type === "NOT_ACTIVE_DATA_TABLE") {
        return false;
    }
    return state;
}
