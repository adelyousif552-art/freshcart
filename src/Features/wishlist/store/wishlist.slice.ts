
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsResponse } from '../types/wishlisttypes';
export interface wishstate{
    count:number,
    products:Product[]
    

}

const initialState:wishstate={
    count:0,
    products:[],
}

const wishslice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        setwislistinfo:function(state,action:PayloadAction<ProductsResponse>){
           state.count=action.payload.data.length
           state.products=action.payload.data
        },
        removeproduct:function(state,action:PayloadAction<{id:string}>){
            const productid=action.payload.id
            const removeditem=state.products.find((item)=>item._id===productid)
            if(removeditem){
                state.products=state.products.filter((product)=>product._id!=productid)
                state.count=state.products.length
                
            }
            

        },
        clearcart:function(state){
            state.count=0
            state.products=[]
        }
    }
})
export const wishreducer=wishslice.reducer
export const wishsliceactions=wishslice.actions