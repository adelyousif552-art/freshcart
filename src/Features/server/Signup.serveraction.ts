'use server'
import { success } from "zod";
import { signupvalidate, validationschema } from "../auth/Schema/signupschema";
import axios, {Axios, AxiosError, AxiosRequestConfig} from 'axios'

export default async function signupserver(values:signupvalidate){
    const validationresult=validationschema.safeParse(values)
    console.log(validationresult);
    
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
        return {
            success:false,
            message:'validation error',
            errors
        }
    }
    const {terms,...Restvalues}=values
    try {
        const options:AxiosRequestConfig={
            url:'https://ecommerce.routemisr.com/api/v1/auth/signup',
            method:'POST',
            data:Restvalues


        }
        const {data}=await axios.request(options)
        if(data.message==='success'){
            return{
                success:true,
                message:'account created successfully',
                data
            }
        }
        return{
            success:false,
            message:'signup failed'
        }
        
    } catch (error) {
        if(error instanceof AxiosError){
            const errormessage=error.response?.data.message
            if(errormessage==='Account Already Exists'){
                return {
                    success:false,
                    message:'account already exist',
                    errors:{
                        email:errormessage
                    }
                }
            }
        }
        
    }
    
}