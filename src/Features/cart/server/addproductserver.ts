'use server'

import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"
import { CartProduct, CartResponse } from "../types/carttypes"

export async function Addproduct({productId}:{productId:string}){
    const cookiesdetails=await cookies()
    const token=cookiesdetails.get('token')?.value||null
    if(!token){
        throw new Error('authentication error')
        
    }
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/cart',
            method:'POST',
            headers:{
                token
            },
            data:{
                productId
            }
            
        }
        const {data}=await axios.request(options)
        return data

        
    } catch (error) {
        throw error

        
    }

}
export async function getcartproducts():Promise<CartResponse>{
     const cookiesdetails=await cookies()
    const token=cookiesdetails.get('token')?.value||null
    if(!token){
        throw new Error('authentication error')
        
    }
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/cart',
            method:'GET',
            headers:{
                token
            }
        }
        const {data}=await axios.request(options)
        return data
    } catch (error) {
        throw error
        
    }

}
export async function deleteproduct(productid:string){
     const cookiesdetails=await cookies()
    const token=cookiesdetails.get('token')?.value||null
    if(!token){
        throw new Error('authentication error')
        
    }
    try {
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/cart/${productid}`,
            method:'DELETE',
            headers:{
                token
            }
        }
        const {data}=await axios.request(options)
        return data
        
    } catch (error) {
        throw error
        
    }
}
export async function updateproduct(productid:string,count:number){
      const cookiesdetails=await cookies()
    const token=cookiesdetails.get('token')?.value||null
    if(!token){
        throw new Error('authentication error')
        
    }
    try {
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/cart/${productid}`,
            method:'PUT',
            headers:{
                token
            },
            data:{
                count
            }
        }
        const {data}=await axios.request(options)
        return data
    } catch (error) {
        throw error
    }
}
