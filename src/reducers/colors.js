let initialState = ["#FFD700","#B22222","#00FFFF","#FF7F24","#FF00FF",
"#90EE90","#8B008B","#CD0000","#00EE00","#8B4513","#000080"];
export default function colors(state = initialState,action) {
    if(action.type === "CHANGE_COLORS") {
          let mass = [...state];
          mass[action.payload.id] = action.payload.value;
          return mass;

    }
    return state;
}
