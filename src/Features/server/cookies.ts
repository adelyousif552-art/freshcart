'use server'
import axios from "axios";
import { cookies, headers } from "next/headers";
import { stateinit } from "../auth/store/auth.slice";


export async function settoken(token:string,rememberme:boolean):Promise<void>{
    const cookiestore=await cookies()
   if(rememberme){
     cookiestore.set('token',token,{
        httpOnly:true,
        secure:false,
        maxAge:30*24*60*60
    })
   }else{
     cookiestore.set('token',token,{
        httpOnly:true,
        secure:false,
        maxAge:24*60*60
    })
   }
}
export async function gettoken():Promise<string|null>{
    const cookiestore=await cookies()
    const token=cookiestore.get('token')?.value||null
    return token
}
export async function deletetoken():Promise<void>{
    const cookiestore=await cookies()
    cookiestore.delete('token')
}
export async function verifytoken():Promise<stateinit>{
    const cookiestore=await cookies()
    const token=cookiestore.get('token')?.value||null
    if(!token){
        return{
            isloggedin:false,
            userinfo:null
        }
    }
    try {
        const options={
            url:'https://ecommerce.routemisr.com/api/v1/auth/verifyToken',
            method:'GET',
            headers:{
                token
            }
        }
        const {data}=await axios.request(options)
        const {name,role,id}=data.decoded
        if(data.message==='verified'){
            return{
                isloggedin:true,
                userinfo:{
                    name:name,
                    id:id,
                    role:role
                }
            }
        }
        return{
            isloggedin:false,
            userinfo:null
        }
        
    } catch (error) {
        return{
            isloggedin:false,
            userinfo:null
        }
        
    }
}