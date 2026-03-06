'use server'
import axios, { Axios, AxiosRequestConfig } from 'axios';

import { cookies } from 'next/headers';
import { ProductsResponse } from '../types/wishlisttypes';

export async function addtowishlist(id:string){
    const cookiestore=await cookies()
    const token=cookiestore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/wishlist',
            method:'POST',
            headers:{
                token
            },
            data:{
                productId:id
            }
        }
        const {data}=await axios.request(options)
        return data
    } catch (error) {
        throw error
    }

}
export async function getwishlist():Promise<ProductsResponse>{
     const cookiestore=await cookies()
    const token=cookiestore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/wishlist',
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
export async function removefromwishlist(id:string){
     const cookiestore=await cookies()
    const token=cookiestore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
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