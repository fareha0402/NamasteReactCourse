import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //action can be like add , remove , clear cart- small apis to communicate with redux 
        addItem :(state,action) =>{
            //mutate teh state
            console.log(current(state.items))
            state.items.push(action.payload)
        },
        removeItem: (state) =>{
            state.items.pop()
        },
        clearCart:(state) => {
            state.items.length = 0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer;