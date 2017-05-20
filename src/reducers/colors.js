let initialState = ["#FFD700","#B22222","#00FFFF","#FF7F24","#FF00FF"];
export default function colors(state = initialState,action) {
    if(action.type === "CHANGE_COLORS") {
          let mass = [...state];
          mass[action.payload.id] = action.payload.value;
          return mass;

    }
    return state;
}
