const Global = {
  Arry  : []
}



function Mega_Menu(state = Global, action) {
  switch (action.type) {
    case "TTT":{
      const data = action.data;
      return{
        ...state,Arry: data
      }
      break;
    }
    case "Remove":{
      const index = action.index;
      return{
          ...state,
          Arry: [
            ...state.Arry.slice(0, index),
            ...state.Arry.slice(index + 1)
        ]
      }
      break;
    }


  }
  return state;
}


export default Mega_Menu;
