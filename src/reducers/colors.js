let initialState = {
  one:["#FFD700"],
  oneColor:false,
  colors:["#FFD700","#B22222","#00FFFF","#FF7F24","#FF00FF",
  "#90EE90","#8B008B","#CD0000","#00EE00","#8B4513","#000080"],
  fontColor:["#d3d3d3"],
  background:"#424242",
}
export default function colors(state = initialState,action) {
    if(action.type === "CHANGE_COLORS") {
        let obj = Object.assign({},state);
        obj.colors[action.payload.id] = action.payload.value;
        return obj;
    }
    if(action.type === "ONE_COLOR") {
        let obj = Object.assign({},state);
        obj.oneColor = action.payload;
        return obj;
    }
    if(action.type === "CHANGE_COLORS_ONE") {
        let obj = Object.assign({},state);
        obj.one[0] = action.payload;
        return obj;
    }
    if(action.type === "FONT_COLOR") {
      let obj = Object.assign({},state);
      obj.fontColor  = action.payload;
      return obj;
    }
    if(action.type === "BACKGROUND_COLOR") {
      let obj = Object.assign({},state, {background:action.payload});

      return obj;
    }
    return state;
}
