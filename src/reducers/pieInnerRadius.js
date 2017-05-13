let initialState = 0;
export default function pieInnerRadius(state = initialState,action) {
    if(action.type ==="PIE_INNER_RADIUS") {
      return  action.payload;
    }

    return state;
}
