'use client'
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {  faArrowsRotate, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Product } from "../types/productstypes";
import Rating from "./Rating";
import Link from "next/link";
import { Addproduct, getcartproducts } from "@/Features/cart/server/addproductserver";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { appstate, dispatchtype } from "@/store/store";
import { cartsliceactions } from "@/Features/cart/store/cartslice";
import { addtowishlist } from "@/Features/wishlist/server/wishlist.server";
import { useEffect, useState } from "react";
import { wishsliceactions } from "@/Features/wishlist/store/wishlist.slice";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export default function Productscard({info}:{info:Product}) {
    
    let {count,products}=useSelector((state:appstate)=>state.wishlist)
    const addwishlist=async()=>{
        try {
            const response=await addtowishlist(info.id)
            
            
            if(response.status==='success'){
                toast.success(response.message)
                dispatch(wishsliceactions.setwislistinfo(response))

                
                
                

            }
           
            
        } catch (error) {
            toast.error('server error')
            throw error
        }
    }
   
    const dispatch=useDispatch<dispatchtype>()
   
    const {title,description,imageCover,subcategory,id,category,price,ratingsAverage,ratingsQuantity,priceAfterDiscount}=info
    const onsale=priceAfterDiscount?priceAfterDiscount<price:false;
    const discount=priceAfterDiscount?(price-priceAfterDiscount)/price*100:0;
 const handleaddproduct=async()=>{
        try {
            const response=await Addproduct({productId:id})
            if(response.status==='success'){
                toast.success(response.message)
                const cartinfo=await getcartproducts()
                dispatch(cartsliceactions.setcartinfo(cartinfo))
            }
            
        } catch (error) {
            toast.error('server error')
        }
    }
  return <>
  <div className="card  shadow-lg p-3 hover:scale-105 transition-all duration-200 hover:shadow-2xl ">
    <div className="photo relative flex justify-center">
        <Image src={imageCover} width={100} height={100} alt="clothes" className="w-full h-60 object-cover "/>
        <div className="icons absolute top-2 right-2 space-y-4 ">
            <div onClick={addwishlist}>
                <FontAwesomeIcon icon={faHeart as IconProp} className="hover:text-red-500 transition-colors duration-200 cursor-pointer" />
            </div>
            <div>
                <FontAwesomeIcon icon={faArrowsRotate as IconProp} className="hover:text-green-500 transition-colors duration-200 cursor-pointer" />
            </div>
            <div><Link href={`/productdetails/${id}`}><FontAwesomeIcon icon={faEye as IconProp} className="hover:text-green-500 transition-colors duration-200 cursor-pointer" /></Link></div>

        </div>
        {onsale?<div className="badge w-12 rounded h-5 text-center bg-red-500 text-white absolute top-2 left-2">
            <span>-{discount.toFixed(0)}%</span>
        </div>:''}
    </div>
    <div className="text ">
        <span className="text-sm text-gray-400">{category.name}</span>
        {title.length>50?<h1 className="font-semibold line-clamp-1 ">{title.slice(0,50)}...</h1>:<h1 className="font-semibold line-clamp-1 ">{title.slice(0,50)}</h1>}
       <div className="flex items-center gap-x-2">
         <Rating rating={ratingsAverage}/>
         <span>{ratingsAverage}</span>
         <span>({ratingsQuantity})</span>
       </div>

    </div>
    <div className="lastcardsection  flex items-center justify-between">
        {onsale?<div className="space-x-1">
            <span className="text-green-600 text-lg font-bold">{priceAfterDiscount} EGP</span>
            <span className="line-through">{price} EGP</span>
        </div>:<h1 className="font-bold text-lg">{price} EGP</h1>}
        <div className="button w-10 h-10 rounded-full hover:bg-green-800 transition-colors duration-200  bg-green-600 flex items-center justify-center">
            <button onClick={handleaddproduct} className="cursor-pointer"><FontAwesomeIcon icon={faPlus as IconProp} className="text-white text-xl"/></button>
        </div>
    </div>
  </div>
  
  </>
}
