let initialState = "Chart Title";
export default function textTitle(state = initialState,action) {
    if(action.type ==="TEXT_TITLE") {
      return  action.payload;
    }

    return state;
}
