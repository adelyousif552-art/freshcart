import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type user={
    name:string,
    email?:string,
    role:string
    id?:string
}
export type stateinit={
    isloggedin:boolean,
    userinfo:null|user
}
const initialState:stateinit={
    isloggedin:false,
    userinfo:null
}

const authslice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setloggedinfo:function(state,action:PayloadAction<stateinit>){
            state.isloggedin=action.payload.isloggedin
            state.userinfo=action.payload.userinfo
        }

    }

})
export const authreducer=authslice.reducer
export const authactions=authslice.actions