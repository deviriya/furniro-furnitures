import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:'',
    addtoCart:[]
};

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        set_prodect_details:(state,{payload})=>{
            state.products = payload
        },
        cart_product:(state,{payload})=>{
           state.addtoCart.push(payload)
        },
        delete_product:(state,{payload})=>{
           state.addtoCart = payload
        }
    }
})


export const {set_prodect_details, cart_product, delete_product} = productSlice.actions;

export default productSlice.reducer;