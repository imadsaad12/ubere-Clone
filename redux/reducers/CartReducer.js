let defaultState={
  selectedItems:  {restaurantName:'',items:[]}
}
let cartReducer=(state=defaultState,action)=>{
  switch (action.type) {
    case "ADD_TO_CART":
      {
      let newState={...state};
      if(action.payload.checkboxValue){
          newState.selectedItems={
            restaurantName:action.payload.restaurantName,
            items:[...newState.selectedItems.items,action.payload]
          }
         console.log("Item added");
        }
        
        else{
          console.log("item removed")
          newState.selectedItems={
            restaurantName:action.payload.restaurantName,
            items:[...newState.selectedItems.items.filter(i=>i.title!==action.payload.title)],

          }
        }
      
        return newState;
    
      }
       
    
    default:
     return state;
  }
}
export default cartReducer;