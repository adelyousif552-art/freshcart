'use server'

import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"

type shippingAddress={
     details: string,
     phone: string,
     city: string
}
export async function cashorder({cartid,shippingAddress}:{cartid:string,shippingAddress:shippingAddress}){
const cookiesstore=await cookies()
const token=cookiesstore.get('token')?.value||null
if(!token){
    throw new Error('Authentication error')
}
try {
    const options:AxiosRequestConfig={
        url:`https://ecommerce.routemisr.com/api/v1/orders/${cartid}`,
        method:'POST',
        headers:{
            token
    },
    data:{
        shippingAddress
    }}
    const {data}=await axios.request(options)
    return data
} catch (error) {
    throw error
    
}



}
export async function onlineorder({cartid,shippingAddress,url}:{cartid:string,shippingAddress:shippingAddress,url:string}){
const cookiesstore=await cookies()
const token=cookiesstore.get('token')?.value||null
if(!token){
    throw new Error('Authentication error')
}
try {
    const options:AxiosRequestConfig={
        url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=${url}`,
        method:'POST',
        headers:{
            token
    },
    data:{
        shippingAddress
    }}
    const {data}=await axios.request(options)
    return data
} catch (error) {
    throw error
    
}



}