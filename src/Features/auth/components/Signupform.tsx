'use client'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {SubmitHandler, useForm} from 'react-hook-form'

import {zodResolver} from '@hookform/resolvers/zod'
import { signupvalidate, validationschema } from "../Schema/signupschema";
import signupserver from "@/Features/server/Signup.serveraction";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { IconProp } from "@fortawesome/fontawesome-svg-core";




export default function Signupform() {
    const Router=useRouter()
    const {register,handleSubmit,formState:{errors,isSubmitting},setError}=useForm<signupvalidate>({
        defaultValues:{
            name:'',
            email:'',
            password:'',
            rePassword:'',
            phone:'',
            terms:false

        },
        resolver:zodResolver(validationschema),
        mode:'onBlur',
        reValidateMode:'onChange'
        
    })
    const onvalid:SubmitHandler<signupvalidate>=async (values)=>{
       try {
         const response=await signupserver(values)
         console.log(response);
         
        
         
        if(response?.success){
            toast.success(response.message)
            setTimeout(() => {
                Router.push('/login')
            }, 2000);
        }else{
            if(response?.errors){
                
                
                Object.keys(response.errors).forEach((key)=>{
                    
                    
                    setError(key as keyof signupvalidate, { message: (response.errors as Record<string, string>)[key] })
                })
            }
        }
       } catch (error) {
        
       }
        

    }
    console.log(errors);
    
  return <>
  <div className="signupform shadow-lg py-3 px-4">
    <div className="header text-center space-y-8">
       <div> <h1 className="font-bold text-2xl">Create Your Account</h1>
        <p>Start your fresh journey with us today</p></div>
        <div className="buttons space-x-3">
            <button className="form-control hover:bg-gray-200/40 cursor-pointer transition-colors duration-200 rounded-xl w-60"><FontAwesomeIcon icon={faGoogle as IconProp} className="text-red-400" /><span>Google</span></button>
            <button className="form-control hover:bg-gray-200/40 cursor-pointer transition-colors duration-200 rounded-xl w-60"><FontAwesomeIcon icon={faFacebook as IconProp} className="text-blue-500" /><span>Facebook</span></button>
        </div>
        <div className="divider  before:w-70 before:h-1 before:bg-gray-500/10 before:absolute relative before:right-2 before:top-1/2 before:-translate-y-1/2 after:h-1 after:bg-gray-500/10 after:absolute after:w-70   after:left-2 after:top-1/2 after:-translate-y-1/2">
            <span className="">or</span>
        </div>
    </div>
    <form onSubmit={handleSubmit(onvalid)}>
        <div className="inputs space-y-6">
            <div className="name">
               <div className="label">
                 <label htmlFor="name">
                    Name*
                </label>
               </div>
                <input 
                type="text"
                placeholder="Yousif"
                className="w-full rounded-xl focus:outline-none focus:border-green-600 border border-gray-300/80 py-2 px-3"
                id="name"
                {...register('name')}
                
                
                />
                {errors.name?<p className="text-red-500">{errors.name.message}</p>:''}
            </div>
             <div className="email">
               <div className="label">
                 <label htmlFor="email">
                    Email*
                </label>
               </div>
                <input 
                type="email"
                placeholder="Yousif@example.com"
                id="email"
                className="w-full rounded-xl focus:outline-none focus:border-green-600 border border-gray-300/80 py-2 px-3"
                {...register('email')}
                
                />
                {errors.email?<p className="text-red-500">{errors.email.message}</p>:''}
            </div>
             <div className="password">
               <div className="label">
                 <label htmlFor="password">
                    Password*
                </label>
               </div>
                <input 
                type="password"
                placeholder="Create a Strong Password"
                className="w-full rounded-xl focus:outline-none focus:border-green-600 border border-gray-300/80 py-2 px-3"
                {...register('password')}
                
                />
                {errors.password?<p className="text-red-500">{errors.password.message}</p>:''}
                  <div className="passwordStrength flex items-center gap-x-2">
                <div className="passwordbar rounded-lg w-full h-1 bg-gray-300 ">
                    <div className="progressbar h-full w-1/4 bg-red-400">

                    </div>
                    
                </div>
                <span>Weak</span>
                
            </div>
            <p className="text-gray-400 text-sm">Must be at least 8 characters with numbers and symbols</p>
            </div>
          
             <div className="confirmpass">
               <div className="label">
                 <label htmlFor="confirmpass">
                    Confirm Password*
                </label>
               </div>
                <input 
                type="password"
                placeholder="confirm your password"
                className="w-full rounded-xl focus:outline-none focus:border-green-600 border border-gray-300/80 py-2 px-3"
                {...register('rePassword')}
                
                />
                {errors.rePassword?<p className="text-red-500">{errors.rePassword.message}</p>:''}
            </div>
             <div className="phonenumber">
               <div className="label">
                 <label htmlFor="phone">
                    Phone Number*
                </label>
               </div>
                <input 
                type="tel"
                placeholder="+1 234 567 8900"
                className="w-full rounded-xl focus:outline-none focus:border-green-600 border border-gray-300/80 py-2 px-3"
                {...register('phone')}
                
                />
                {errors.phone?<p className="text-red-500">{errors.phone.message}</p>:''}
            </div>
            <div className="checkbox flex items-center gap-x-3 py-3 px-1   ">
                
                    <input type="checkbox" className="accent-green-600 size-5" {...register('terms')} />
                
                <label htmlFor="terms" className=" text-2xl">I agree to the <Link href={'/terms'} className="text-green-600 underline">Terms of Service </Link>and <Link href={'/privacy'} className="text-green-600 underline">Privacy Policy *</Link></label>
                {errors.terms?<p className="text-red-500">{errors.terms.message}</p>:''}
            </div>
        </div>
       <div className="space-y-9">
        <div className="flex justify-center">
         <button disabled={isSubmitting} type="submit" className="rounded-xl w-10/12 disabled:cursor-not-allowed bg-green-600 text-white py-3 space-x-2 hover:bg-green-800 transition-colors duration-200 cursor-pointer">
            {isSubmitting?<>
            <FontAwesomeIcon icon={faSpinner as IconProp} spin />
            <span>Creating Account</span>
            </>:<><FontAwesomeIcon icon={faUserPlus as IconProp} />
            <span>Create My Account</span></>}
        </button>
        </div>
        <div className="text-center">
            <p>Already have an account? <Link href={'/login'} className="text-green-600 underline">sign in</Link></p>
        </div>
       </div>
       



    </form>
  </div>
  
  
  
  </>
}
