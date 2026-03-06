'use client'
import Cartitem from "@/Features/cart/components/cartitem"
import { faCcAmex, faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft, faBagShopping, faBox, faCartShopping, faCheck, faCircleInfo, faCity, faCreditCard, faHouse, faLocation, faLocationDot, faLock, faMoneyBill, faPhone, faReceipt, faShieldHalved, faTag, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { checkoutschema, shippingaddresstype } from "../schema/checkoutschema"
import { cashorder, onlineorder } from "../server/checkoutserver"
import { useDispatch, useSelector } from "react-redux"
import { appstate } from "@/store/store"
import { set } from "zod"
import { getcartproducts } from "@/Features/cart/server/addproductserver"
import { ProductsResponse } from "@/Features/Products/types/productstypes"
import { CartResponse, Product } from "@/Features/cart/types/carttypes"
import Image from "next/image"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { cartsliceactions } from "@/Features/cart/store/cartslice"

export default  function Checkoutscreen() {
    const dispatch=useDispatch()
    const router=useRouter()
    const [response,setresponse]=useState<CartResponse|null>(null)
      useEffect(() => {
        async function fetchData() {
            const response = await getcartproducts();
           
            setresponse(response);
           
        }
        fetchData();
    }, []);
    
    const {CartId}=useSelector((state:appstate)=>state.cart)
    
    
    
   const {register,handleSubmit,reset,formState:{errors}}= useForm({
        defaultValues:{
           details:'',
           phone:'',
           city:''
        },
        resolver:zodResolver(checkoutschema),
        mode:'onSubmit',
        reValidateMode:'onChange'


    })
    const [clickedcash,setclickedcash]=useState(false);
    const [clickedonline,setclickedonline]=useState(false);
    const onsubmit:SubmitHandler<shippingaddresstype>=async (values)=>{
        try {
            if(!CartId){
                return;
            }
            if(clickedcash){
               const response=await cashorder({cartid:CartId,shippingAddress:values})
                if(response.status==='success'){
                toast.success('order created successfully')
                dispatch(cartsliceactions.clearcart())
                reset()
                setTimeout(() => {
                    router.push('/allorders')
                }, 3000);

            }
console.log(response);

               
               
               
               
            }else{
                 
                  const response=await onlineorder({cartid:CartId,shippingAddress:values,url:location.origin})
                   if(response.status==='success'){
                toast.success('redirected to payment page')
                dispatch(cartsliceactions.clearcart())
                reset()
                setTimeout(() => {
                   location.href=response.session.url
                }, 3000);

            }
                  
            }
            
        } catch (error) {
            throw error
        }
        

    }
      return <>
  <section className="my-10 mx-4">
    
    <div className="header space-y-2 ">
       <div className="flex items-center gap-x-3">
         <div className="icon w-12 h-12 rounded-xl bg-linear-to-r from-green-600 to-green-800 flex items-center justify-center">
            <FontAwesomeIcon icon={faReceipt} className="text-white text-2xl" />
        </div>
        <div className="text">
            <h1 className="text-4xl font-bold">Complete Your Order</h1>
        </div>
       </div>
        <div>
            <p className="text-xl text-gray-500">Review your items and complete your purchase</p>
        </div>
    </div>
    <div className="grid grid-cols-12 space-x-5">
        <div className="cartitems col-span-9 border border-gray-400/20 rounded-4xl my-5 shadow-xl">
            <div className="header2 bg-green-600 p-8 rounded-t-4xl ">
                <div>
                    <FontAwesomeIcon icon={faHouse} className="text-white text-2xl" /> <span className="text-white text-2xl">Shipping Address</span>
                    
                </div>
                <p className="text-gray-200">Where should we deliver your order?</p>
            </div>
           <section className=" py-4">
             
            <form onSubmit={handleSubmit(onsubmit)}>
                
                <div className="inputs space-y-3 px-10">
                    <div className="flex items-center gap-x-2 bg-blue-200/30 rounded-2xl p-5">
               <div>
                 <div className="icon w-6 h-6 rounded-circle bg-blue-200/20 flex items-center justify-center ">
                    <FontAwesomeIcon icon={faCircleInfo} className="text-blue-600" />
                    </div>
                </div>
                <div>
                    <h1 className="text-blue-600 font-bold">Delivery Information</h1>
                    <p className="text-blue-500">Please ensure your address is accurate for smooth delivery</p>
                </div>
               
            </div>
                   <div className="city space-y-1">
                     <div className="label">
                        <h1>City <span className="text-red-500">*</span></h1>
                    </div>
                    <div className="input relative">
                        <input {...register('city')} type="text" placeholder="e.g.cairo,Alexandria,Giza" className="w-full px-15 py-4 rounded-2xl outline-2 outline-gray-400/40 focus:outline-green-600 transition-colors duration-200  " />
                        <FontAwesomeIcon icon={faCity} className="absolute bg-gray-400/10 p-3 rounded-2xl left-2  top-1/2 -translate-y-1/2" />
                        
                    </div>
                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                   </div>
                   <div className="streetaddress space-y-1">
                     
                     <div className="label">
                        <h1>Street Address <span className="text-red-500">*</span></h1>
                    </div>
                    <div className="input relative">
                        <textarea {...register('details')}  placeholder="Street name, building number, floor, apartment number" className="w-full h-32 py-4 px-15 rounded-2xl outline-2 outline-gray-400/40 focus:outline-green-600 transition-colors duration-200  " >

                        </textarea>
                        <FontAwesomeIcon icon={faLocationDot} className="absolute bg-gray-400/10 p-3 rounded-2xl left-2  top-7 -translate-y-1/2" />
                        
                    </div>
                    {errors.details && <p className="text-red-500 text-sm">{errors.details.message}</p>}
                   
                    
                    
                   </div>
                    <div className="phone space-y-1">
                     <div className="label">
                        <h1>Phone Number <span className="text-red-500">*</span></h1>
                    </div>
                    <div className="input relative">
                        <input {...register('phone')} type="tel" placeholder="01xxxxxxxxx" className="w-full px-15 py-4 rounded-2xl outline-2 outline-gray-400/40 focus:outline-green-600 transition-colors duration-200  " />
                        <FontAwesomeIcon icon={faPhone} className="absolute bg-gray-400/10 p-3 rounded-2xl left-2  top-1/2 -translate-y-1/2" />
                        
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                   </div>
                </div>
                  <div className="header2 my-5 bg-green-600 p-8 rounded-t-4xl ">
                <div>
                    <FontAwesomeIcon icon={faHouse} className="text-white text-2xl" /> <span className="text-white text-2xl">Payment Method</span>
                    
                </div>
                <p className="text-gray-200">Choose how you'd like to pay</p>
            </div>
            <div className="checkbutton px-10 space-y-5">
                 <label onClick={()=>{
                    setclickedcash(true);
                    setclickedonline(false);
                 }} htmlFor="rad2" className={`flex ${clickedcash?'outline-green-600':''}  justify-between items-center cursor-pointer hover:bg-gray-100 gap-x-2 outline-2 outline-gray-500/30  rounded-2xl p-8 transition-colors duration-200`}>
               <div className="flex items-center gap-x-2">
                <div>
                 <div className={`icon ${clickedcash?'bg-green-500  shadow-2xl':''} w-12 h-12 rounded-2xl bg-gray-400/10  flex items-center justify-center transition-all duration-200 `}>
                    <FontAwesomeIcon icon={faMoneyBill} className={`text-2xl ${clickedcash?'text-white':''} transition-all duration-200`} />
                    </div>
                </div>
                <div>
                    <h1 className="text-black font-bold">Cash on Delivery</h1>
                    <p className="text-gray-400">pay when your order arrives at your door step</p>
                </div>
               </div>
                <input type="radio" id="rad2" name="rad" className="w-6 h-6 peer hidden checked:border-green-600" />
                <div className={`check w-6 h-6 ${clickedcash?'border-green-600':''}  relative rounded-full border`}>
                   <div className={`w-6  ${clickedcash?'flex items-center justify-center':'hidden'}  h-6 rounded-full   bg-green-600`}>
                     <FontAwesomeIcon icon={faCheck} className="text-white   rounded-full  text-sm " />
                   </div>
                </div>
                
               
            </label>
             <label onClick={()=>{
                setclickedcash(false);
                setclickedonline(true);
             }} htmlFor="rad" className={`flex ${clickedonline?'outline-green-600':''}  justify-between items-center gap-x-2 outline-2 transition-colors duration-200 outline-gray-500/30  rounded-2xl p-6 cursor-pointer hover:bg-gray-100`}>
               <div className="flex items-center gap-x-2">
                <div>
                 <div className={`icon w-12 h-12  rounded-2xl bg-gray-400/10  flex items-center justify-center ${clickedonline?'bg-linear-to-r from-green-200 to-blue-400':''} `}>
                    <FontAwesomeIcon icon={faCreditCard} className="text-2xl" />
                    </div>
                </div>
                <div>
                    <h1 className="text-black font-bold">Pay Online</h1>
                    <p className="text-gray-400">Secure Payment with credit/Debit card via Stripe</p>
                    <div className="icons space-x-2">
                    <FontAwesomeIcon icon={faCcVisa} className="text-blue-600"/>
                    <FontAwesomeIcon icon={faCcMastercard} className="text-blue-600 "/>
                    <FontAwesomeIcon icon={faCcAmex} className="text-blue-600"/>

                </div>
                </div>
                
               </div>
                <input type="radio" id="rad" name="rad" className="w-6 h-6 peer hidden checked:border-green-600" />
                <div className={`check w-6 h-6 ${clickedonline?'border-green-600':''}  relative rounded-full border`}>
                   <div className={`w-6  ${clickedonline?'flex items-center justify-center':'hidden'}  h-6 rounded-full   bg-green-600`}>
                     <FontAwesomeIcon icon={faCheck} className="text-white   rounded-full  text-sm " />
                   </div>
                </div>
                
               
            </label>
             <div className="bg-green-300/30 rounded-2xl p-6 flex items-center gap-x-2">
            <div className="icon flex items-center justify-center w-8 h-8 rounded-full bg-green-400/20">
                <FontAwesomeIcon icon={faShieldHalved} className="text-green-500"/>
            </div>
            <div className="text">
                <h1 className="text-green-700 font-bold">Secure & Encrypted</h1>
                <p className="text-green-500">Your payment info is protected with 256-bit SSL encryption</p>
            </div>

            </div>
            </div>



            </form>
           
           
           </section>

            

        </div>
        <div className="cartsummary col-span-3 shadow-lg rounded-lg">
            <div className="header">
                <div className="bg-linear-to-r from-green-600 to-green-800  p-5 rounded-t-3xl">
                    <div className="flex items-center gap-x-3">
                    <FontAwesomeIcon icon={faBagShopping} className="text-white" />
                    <h1 className="text-white text-2xl font-bold">Order Summary</h1>
                    </div>
                    <p className="text-gray-200">{response?.numOfCartItems} items in your cart</p>
                </div>
                
            </div>
            <div className="p-5">
                <div className=" max-h-28 overflow-y-scroll">
                   {response?.data.products.map((prod)=>{
                    return  <div className="  rounded-xl justify-between bg-gray-300/20 p-5 gap-x-2 flex items-center ">
                   <div className="flex items-center space-x-2">
                     <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center">
                        <Image src={prod.product.imageCover} alt={prod.product.title} width={50} height={50} className="object-contain"/>
                    </div>
                    <div>
                        <h1 className="text-green-800">{prod.product.title}</h1>
                        <p className="text-green-600">{prod.count}x{prod.price}</p>
                    </div>
                   </div>
                   <h1 className="font-bold text-black">{prod.count*prod.price}</h1>
                </div>
                   })}
                
                </div>
                <div className="my-5 space-y-3">
                    
                   
                    <div className="flex items-center justify-between">
                        <span>Shipping</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    
                </div>
                <div className="flex items-center justify-between my-10">
                    <span className="font-semibold">Total</span>
                    <h6 ><span className="font-bold text-2xl">{response?response.data.totalCartPrice:''}</span> EGP</h6>
                </div>
                <div className="buttons space-y-3">
                    
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <button type="submit" className="w-full space-x-2 border bg-green-600 hover:bg-green-800 cursor-pointer transition-colors duration-200 rounded-2xl  py-4 shadow-2xl px-3">{clickedcash?<FontAwesomeIcon icon={faBox} className="text-white" />:<FontAwesomeIcon className="text-white" icon={faShieldHalved}/>}<span className="text-white font-bold">{clickedcash?'Place Order':'Processed to Payment'}</span></button>
                    </form>
                    
                </div>
                <div className="my-9">
                    <p className=" text-center space-x-2"><span className="space-x-2"><FontAwesomeIcon icon={faShieldHalved} className="text-green-600"/><span>secure payment</span></span> <span className="text-gray-300">|</span> <span className="space-x-2" ><FontAwesomeIcon icon={faTruck} className="text-blue-500"/><span>Fast Delivery</span></span> </p>
                </div>
                <div className="shopping text-center mt-15">
                    <Link className="text-green-600 space-x-2  hover:text-green-800" href={'/shop'}> <FontAwesomeIcon icon={faArrowLeft}/><span>Continue Shopping</span></Link>
                </div>
            </div>

        </div>

    </div>
        
        
  </section>
  
  
  </>
}
