
'use server'
import { Address, AddressResponse, AddressupdResponse } from './../types/addresstype';


import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"
import { addressvalidate, profileinfotype, updatepasstype } from "../schema/addressschema"

export default async function addaddress(values:addressvalidate):Promise<AddressResponse>{
    const cookiesstore=await cookies()
    const token=cookiesstore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/addresses',
            method:'POST',
            headers:{
                token
            },
            data:{
                name:values.name,
                details:values.details,
                phone:values.phone,
                city:values.city
            }

            
        }
        const {data}=await axios.request(options)
        
        return data
        
    } catch (error) {
        throw error
    }

}
export async function getalladdresses(){
     const cookiesstore=await cookies()
    const token=cookiesstore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/addresses',
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
export async function removeaddress(id:string){
     const cookiesstore=await cookies()
    const token=cookiesstore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/addresses/${id}`,
            method:'DELETE',
            headers:{
                token
            }
        }
        const{data}=await axios.request(options)
        return data
    } catch (error) {
        throw error
    }

}
export async function updateaddress(id:string):Promise<AddressupdResponse>{
     const cookiesstore=await cookies()
    const token=cookiesstore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:`https://ecommerce.routemisr.com/api/v1/addresses/${id}`,
            method:'GET',
            headers:{
                token
            }
        }
        const{data}=await axios.request(options)
        return data
    } catch (error) {
        throw error
    }

}
export async function updateprofile(values:profileinfotype){
    const cookiesstore=await cookies()
    const token=cookiesstore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/users/updateMe/',
            method:'PUT',
            headers:{
                token
            },
            data:{
                name:values.name,
                email:values.email,
                phone:values.phone
            }
        }
        const {data}=await axios.request(options)
        return data
    } catch (error) {
        throw error
    }
}
export async function updatepassword(values:updatepasstype){
     const cookiesstore=await cookies()
    const token=cookiesstore.get('token')?.value||null
    if(!token){
        throw new Error('Authentication error')
    }
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',
            method:'put',
            headers:{
                token
            },
            data:{
                currentPassword:values.currentPassword,
                password:values.password,
                rePassword:values.rePassword
            }

        }
        const {data}=await axios.request(options)
        return data
    } catch (error) {
        throw error
    }
}
