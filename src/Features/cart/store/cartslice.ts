
import { CartProduct, CartResponse } from './../types/carttypes';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface cartstate{
    numOfCartItems:number,
    CartId:string|null,
    products:CartProduct[],
    totalCartPrice:number,
    isLoading:boolean,
    error:string|null

}

const initialState:cartstate={
    numOfCartItems:0,
    CartId:null,
    products:[],
    totalCartPrice:0,
    isLoading:false,
    error:null
}

const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        setcartinfo:function(state,action:PayloadAction<CartResponse>){
            state.CartId=action.payload.cartId
            state.numOfCartItems=action.payload.numOfCartItems
            state.products=action.payload.data.products
            state.totalCartPrice=action.payload.data.totalCartPrice
        },
        removeproduct:function(state,action:PayloadAction<{id:string}>){
            const productid=action.payload.id
            const removeditem=state.products.find((item)=>item.product._id===productid)
            if(removeditem){
                state.products=state.products.filter((product)=>product.product._id!=productid)
                state.numOfCartItems=state.products.length
                state.totalCartPrice-=removeditem.price*removeditem.count
            }
            

        },
        clearcart:function(state){
            state.CartId=null
            state.numOfCartItems=0
            state.products=[]
            state.totalCartPrice=0
        }
    }
})
export const cartreducer=cartslice.reducer
export const cartsliceactions=cartslice.actions