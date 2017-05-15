let initialState = {
  sufix:"",
  prefix:"",
  select:"",
  format:1,
};
export default function numberFormat(state = initialState,action) {
    if(action.type ==="NUMBER_SUFIX") {
        return  Object.assign({},state,{sufix:action.payload});
    }
    if(action.type === "NUMBER_PREFIX") {
        return Object.assign({},state,{prefix:action.payload});
    }
    if(action.type === "NUMBER_SELECT") {
        return Object.assign({},state,{select:action.payload});
    }
    if(action.type === "NUMBER_FORMAT") {
        return Object.assign({} , state , {format:+action.payload});
    }
    return state;
}
