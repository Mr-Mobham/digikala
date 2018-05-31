const Global = {

}



function notification(state = Global, action) {
  switch (action.type) {
    case "TEST":{
      const data  = action.data;

      return{
        ...state,Arry: data
      }
        break;
    }
    case "REMOVE--CATEGORY":{
      const index  = action.index;

      return{
        ...state,
        Category_Post_Notification: [
         ...state.Category_Post_Notification.slice(0, index),
         ...state.Category_Post_Notification.slice(index + 1)
       ]
      }
        break;
    }








  }
  return state;
}

export default notification;
