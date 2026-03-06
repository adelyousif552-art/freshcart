import { current } from "@reduxjs/toolkit";
import z from "zod";

export const addressschema=z.object({
    name:z.string().nonempty('name is required').min(3),
    details:z.string().nonempty('required').min(6,'must be at least 6 characters'),
    phone:z.string().nonempty('phone number is required').regex(/^01[0125][0-9]{8}$/,'phone number from egypt only'),
    city:z.string().nonempty('city is required').min(10)
})
export type addressvalidate=z.infer<typeof addressschema>


export const profileschema=z.object({
    name:z.string().nonempty('name is required').min(3,'name must be greater than 3 characters').max(25,'name must be less than 25 characters'),
     email:z.string().nonempty('email is requried').pipe(z.email('email is ivalid')),
     phone:z.string().nonempty('phone number is required').regex(/^01[0125][0-9]{8}$/,'phone number from egypt only')
})
export type profileinfotype=z.infer<typeof profileschema>

export const updatepasswordschema=z.object({
    currentPassword:z.string(),
    password:z.string().nonempty('password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'password must be Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'),
     rePassword:z.string().nonempty('repassword is required')
}).refine((data)=>data.rePassword===data.password,{
    path:['rePassword'],
    error:'confirm password must match password'
})
export type updatepasstype=z.infer<typeof updatepasswordschema>