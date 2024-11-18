import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const products = action.payload;
      const existingProduct = state.find((item) => item.id === products.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...products, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        if(existingProduct.quantity > 1){
          existingProduct.quantity -= 1;
        }
      } else {
      }
    },
    clearCart:(state,action)=>{
      return state.filter((item) => item.id !== action.payload.id); 
    }
  },
});
export const { addToCart,clearCart, removeFromCart } = cart.actions;
export default cart.reducer;
