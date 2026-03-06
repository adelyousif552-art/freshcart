'use server'

import axios, { Axios, AxiosRequestConfig } from "axios"
import { Order, OrdersResponse } from "../types/orderstypes"

export async function getuserorders({id}:{id:string}):Promise<OrdersResponse>{
    try {
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
            method:'GET'
        }
        const {data}=await axios.request(options)
        return data
        
    } catch (error) {
        throw error
    }
}