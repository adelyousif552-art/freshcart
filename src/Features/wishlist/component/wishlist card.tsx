"use client";
import Swal from 'sweetalert2'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../types/wishlisttypes";
import { wishsliceactions } from '../store/wishlist.slice';
import { useDispatch, useSelector } from 'react-redux';
import { getwishlist, removefromwishlist } from '../server/wishlist.server';
import { toast } from 'react-toastify';
import { appstate } from '@/store/store';
import { useEffect } from 'react';
import { Addproduct, getcartproducts } from '@/Features/cart/server/addproductserver';
import { cartsliceactions } from '@/Features/cart/store/cartslice';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function WishlistCard({info}:{info:Product}) {
 
  const dispatch=useDispatch()
  const handleaddproduct=async()=>{
          try {
              const response=await Addproduct({productId:info._id})
              if(response.status==='success'){
                  toast.success(response.message)
                  const cartinfo=await getcartproducts()
                  dispatch(cartsliceactions.setcartinfo(cartinfo))
              }
              
          } catch (error) {
              
          }
      }
  
      
  const handleremove= async()=>{
         const result= await Swal.fire({
              html:` <div class="alert  py-2 space-y-2  flex flex-col items-center max-w-xl mx-auto ">
      <div class="deleteicon w-12 h-12 flex items-center justify-center bg-red-300/30 rounded-full">
          <svg class='text-red-500 size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
  
      </div>
      <h1 class="font-bold">Remove item?</h1>
      <p class="text-gray-400 text-xs">Remove <span class="font-semibold text-black">${info.title.slice(0,40)}${info.title.length>40?'...':''}</span> from your cart?</p>
    </div>`,
    
    
    showCancelButton:true,
    cancelButtonText:'cancel',
    confirmButtonText:'Remove',
    buttonsStyling:false,
    customClass:{
      confirmButton:`bg-red-500 hover:bg-red-700 cursor-pointer text-white rounded-xl py-3 px-6 transition-all duration-200`,
      cancelButton:`bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer rounded-xl py-3 px-6 transition-all duration-200`
  
    }
  
          })
          if(result.isConfirmed){
               dispatch(wishsliceactions.removeproduct({id:info._id}))
              await removefromwishlist(info._id)

             
              toast.success('product is deleted successfully')
  
          }
      }
  return (
    <div className="grid grid-cols-12 items-center px-10 py-7 border-b last:border-0 hover:bg-gray-50 transition">

      
      <div className="col-span-5 flex items-center gap-5">
        <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center">
          <Image
            src={info.imageCover}
            alt={info.title}
            width={75}
            height={75}
            className="object-contain"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {info.title}
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            {info.category?.name}
          </p>
        </div>
      </div>

     
      <div className="col-span-2 text-center">
        <p className="text-lg font-semibold text-gray-900">
          {info.priceAfterDiscount?info.priceAfterDiscount:info.price} EGP
        </p>
       {info.priceAfterDiscount? <p className="text-sm text-gray-400 line-through mt-1">
          {info.price} EGP
        </p>:''}
      </div>

      
      <div className="col-span-2 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          In Stock
        </span>
      </div>

      
      <div className="col-span-3 flex items-center justify-center gap-4">
        <button onClick={handleaddproduct} className=" cursor-pointer   bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm transition">
          <FontAwesomeIcon icon={faCartShopping as IconProp} />
         <span> Add to Cart</span>
        </button>

        <button onClick={handleremove} className=" cursor-pointer w-11 h-11 group rounded-xl border border-gray-200 flex items-center justify-center hover:bg-red-200/20 hover:border-red-200 transition">
          <FontAwesomeIcon icon={faTrash as IconProp} className="text-gray-500 group-hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}