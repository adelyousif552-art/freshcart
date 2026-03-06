'use server'
import { Category } from './../types/productstypes';


import axios, { AxiosRequestConfig } from "axios"
import { ProductsResponse, singleproducttype } from "../types/productstypes"

export async function getproducts({category}:{category?:string}={}):Promise<ProductsResponse>{
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/products',
            method:'GET'

        }
        const {data}=await axios.request(options)
        return data
    } catch (error) {
        throw error

        
    }
}
export async function getsingleproduct(id:string):Promise<singleproducttype>{
    console.log('id is',id);
    
  try {
      const options:AxiosRequestConfig={
        url:`https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method:'GET'
    }
    const {data}=await axios.request(options)
    return data

  } catch (error) {
    throw error
  }

}