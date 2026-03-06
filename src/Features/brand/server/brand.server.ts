'use server'

import axios, { AxiosRequestConfig } from "axios"
import { BrandsResponse } from "../types/brandtypes"

export async function getbrands():Promise<BrandsResponse>{
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/brands',
            method:'GET'
        }
        const {data}=await axios.request(options)
        return data
    } catch (error) {
        throw error
    }
}
export async function getsinglebrand(id:string):Promise<BrandsResponse>{
    try {
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/categories/${id}`,
            method:'GET'
        }
        console.log('no problems');
        const {data}=await axios.request(options)
        
        
        return data
    } catch (error) {
        throw error
        
    }
}