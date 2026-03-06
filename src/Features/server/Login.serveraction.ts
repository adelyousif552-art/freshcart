'use server'

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { LoginSchema, loginvaluestype } from "../auth/Schema/Loginschema";
import { success } from "zod";


export default async function loginserver(values:loginvaluestype){
    const validationresult=LoginSchema.safeParse(values)
    if(!validationresult.success){
        const errors:Record<string,string>={}
        if(validationresult.error){
            validationresult.error.issues.forEach((issue)=>{
                const field=issue.path[0] as string
                const message=issue.message
                if(!errors[field]){
                    errors[field]=message

                }
            })
        }
        return{
            success:false,
            message:'validation error',
            errors
        }

    }
    try {
        const {rememberme,...restvalues}=values
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/auth/signin',
            method:'POST',
            data:restvalues
        }
        const {data}=await axios.request(options)
        if(data.message==='success'){
            return{
                success:true,
                message:'login succesfully',
                data
            }
        }
            return{
                success:false,
                Message:'login failed'

            }
        
       
        
    } catch (error) {
        if(error instanceof AxiosError){
            const errormessage=error.response?.data.message
            if(errormessage==='Incorrect email or password'){
                return{
                    success:false,
                    message:'error credentials',
                    errors:{
                        password:errormessage
                    }
                }

            }
        }
       
       
            
        }
        
        
        
        
    }

