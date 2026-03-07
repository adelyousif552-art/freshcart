'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, loginvaluestype } from "../Schema/Loginschema";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope, faLock, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import loginserver from "@/Features/server/Login.serveraction";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { settoken } from "@/Features/server/cookies";
import { authactions } from "../store/auth.slice";
import { useDispatch, useSelector } from "react-redux";

import { IconProp } from "@fortawesome/fontawesome-svg-core";


export default function Loginform() {
   
    const Router=useRouter()
    const dispatch=useDispatch()
   
    const {register,handleSubmit,formState:{errors,isSubmitting},setError}=useForm<loginvaluestype>({
        defaultValues:{
            email:'',
            password:'',
            rememberme:false
        },
        resolver:zodResolver(LoginSchema),
        mode:'onChange'

    })
    const onvalid:SubmitHandler<loginvaluestype>=async (values)=>{
      try {
         const response= await loginserver(values)
       if(response?.success){
        toast.success(response.message)
        settoken(response.data.token,values.rememberme)
        dispatch(authactions.setloggedinfo({isloggedin:true,userinfo:response.data.user}))
        setTimeout(() => {
            Router.push('/')
            
        }, 2000);
       

       }else{
        if(response?.errors){
            Object.keys(response.errors).forEach((key)=>{
                setError(key as keyof loginvaluestype, { message: (response?.errors as Record<string, string>)[key] })
            })
        }
       }
        
      } catch (error) {
        
      }
      
       
        
    }
  return <>
   <div className="Loginform shadow-lg py-3 px-8">
    <div className="header text-center space-y-8">
       <div className="space-y-3"> <h1 className="font-bold text-4xl"><span className="text-green-600">Fresh</span> Cart</h1>
       <h1 className="font-bold text-4xl">Welcome Back!</h1>
        <p>Sign in to continue your fresh shopping experience</p></div>
        <div className="buttons space-y-4">
            <button className="form-control space-x-3 text-xl hover:bg-gray-200/40 cursor-pointer transition-colors duration-200 rounded-xl w-full py-3"><FontAwesomeIcon icon={faGoogle as IconProp} className="text-red-400" /><span>Continue With Google</span></button>
            <button className="form-control space-x-3 text-xl hover:bg-gray-200/40 cursor-pointer transition-colors duration-200 rounded-xl w-full py-3"><FontAwesomeIcon icon={faFacebook as IconProp} className="text-blue-500" /><span>Continue With Facebook</span></button>
        </div>
        <div className="divider  before:w-40 before:h-1 before:bg-gray-500/10 before:absolute relative before:right-2 before:top-1/2 before:-translate-y-1/2 after:h-1 after:bg-gray-500/10 after:absolute after:w-40   after:left-2 after:top-1/2 after:-translate-y-1/2">
            <span className="">OR CONTINUE WITH EMAIL</span>
        </div>
    </div>
    <form onSubmit={handleSubmit(onvalid)}>
        <div className="inputs space-y-6">
            
             <div className="email">
               <div className="label">
                 <label htmlFor="email" className="text-lg">
                    Email Address*
                </label>
               </div>
                <div className=" relative">
                    <input 
                type="email"
                placeholder="Enter your Email"
                id="email"
                className="w-full rounded-xl focus:outline-none focus:border-green-600 border border-gray-300/80 py-4 px-8"
                {...register('email')}
                
                />
                 <FontAwesomeIcon icon={faEnvelope as IconProp} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"/>

                </div>
               
                {errors.email?<p className="text-red-500">{errors.email.message}</p>:''}
            </div>
             <div className="password">
               <div className="label">
                 <label htmlFor="password" className="text-lg">
                    Password*
                </label>
               </div>
                <div className="relative">
                    <input 
                type="password"
                placeholder="Enter your Password"
                className="w-full rounded-xl focus:outline-none focus:border-green-600 border border-gray-300/80 py-4 px-8 "
                {...register('password')}
                
                />
                <FontAwesomeIcon icon={faLock as IconProp} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"/>
                </div>
                {errors.password?<p className="text-red-500">{errors.password.message}</p>:''}
                
           
            </div>
          
            
            <div className="checkbox flex items-center gap-x-3 py-3 px-1   ">
                
                    <input type="checkbox" id="rememberme" className="accent-green-600 size-5" {...register('rememberme')} />
                
                <label htmlFor="rememberme" className=" text-2xl">Keep me signed in</label>
                {errors.rememberme?<p className="text-red-500">{errors.rememberme.message}</p>:''}
            </div>
        </div>
       <div className="space-y-9">
        <div className="flex justify-center">
         <button disabled={isSubmitting}  type="submit" className="rounded-xl w-10/12 disabled:cursor-not-allowed bg-green-600 text-white py-3 space-x-2 hover:bg-green-800 transition-colors duration-200 cursor-pointer">
            
         {isSubmitting?<>
        
         <span>Signing in</span>
          <FontAwesomeIcon icon={faSpinner as IconProp} spin />
         </>:<>Sign in</>}
            
            
        </button>
        </div>
        <div className="text-center">
            <p>New to FreshCart? <Link href={'/signup'} className="text-green-600 underline hover:text-green-900">Create an account</Link></p>
        </div>
       </div>
       



    </form>
  </div>
  
  
  </>
}
