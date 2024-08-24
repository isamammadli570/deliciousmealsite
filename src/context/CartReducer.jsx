/* eslint-disable no-unused-expressions */
const CartReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return [...state, action.food];
        
  
      case "Remove":
        return state.filter((food) => food.id !== action.id);
  
      default:
        state;
    }
  };
  
  export default CartReducer;