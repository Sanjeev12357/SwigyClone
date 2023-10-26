import { createSlice } from "@reduxjs/toolkit"


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            const indexToRemove=action.payload;
            state.items.splice(indexToRemove,1);
            
        },
        clearCart:(state)=>{
            state.items=[];
        },
    },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;


