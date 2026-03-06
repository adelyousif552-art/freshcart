import {z} from 'zod'
export const validationschema=z.object({
    name:z.string().nonempty('name is required').min(3,'name must be greater than 3 characters').max(25,'name must be less than 25 characters'),
    email:z.string().nonempty('email is requried').pipe(z.email('email is ivalid')),
    password:z.string().nonempty('password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'password must be Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'),
    rePassword:z.string().nonempty('repassword is required'),
    phone:z.string().nonempty('phone number is required').regex(/^01[0125][0-9]{8}$/,'phone number from egypt only'),
    terms:z.boolean().refine((value)=>value===true,{
        error:'must be checked to continue'
    })
}).refine((data)=>data.rePassword===data.password,{
    path:['rePassword'],
    error:'confirm password must match password'
})

export type signupvalidate=z.infer<typeof validationschema>