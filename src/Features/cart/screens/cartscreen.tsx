'use client'
import { appstate } from "@/store/store";

import { faArrowLeft, faBagShopping, faCartShopping,faLock,faShieldHalved,faTag,faTrash,faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelector } from "react-redux";
import Cartitem from "../components/cartitem";
import { useRouter } from "next/navigation";



export default function Cartscreen() {
    const router=useRouter()
    const {CartId,numOfCartItems,totalCartPrice,products}=useSelector((state:appstate)=>state.cart)
  return <>
  <section className="my-10 mx-4">
    {numOfCartItems>0?<>
    <div className="header space-y-2 ">
       <div className="flex items-center gap-x-3">
         <div className="icon w-12 h-12 rounded-xl bg-linear-to-r from-green-600 to-green-800 flex items-center justify-center">
            <FontAwesomeIcon icon={faCartShopping} className="text-white text-2xl" />
        </div>
        <div className="text">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
        </div>
       </div>
        <div>
            <p className="text-xl text-gray-500">You have <span className="text-green-400">{numOfCartItems} items</span> in your cart</p>
        </div>
    </div>
    <div className="grid grid-cols-12">
        <div className="cartitems col-span-9">
            {products.map((product)=>{
                return <Cartitem product={product}/>
                
            })}

        </div>
        <div className="cartsummary col-span-3 shadow-lg rounded-lg">
            <div className="header">
                <div className="bg-linear-to-r from-green-600 to-green-800  p-5 rounded-t-3xl">
                    <div className="flex items-center gap-x-3">
                    <FontAwesomeIcon icon={faBagShopping} className="text-white" />
                    <h1 className="text-white text-2xl font-bold">Order Summary</h1>
                    </div>
                    <p className="text-gray-200">{numOfCartItems} items in your cart</p>
                </div>
                
            </div>
            <div className="p-5">
                <div className=" rounded-lg bg-green-300/20 p-5 gap-x-2 flex items-center ">
                    <div className="w-9 h-9 rounded-full bg-green-300/30 flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruck} className="text-green-600"/>
                    </div>
                    <div>
                        <h1 className="text-green-800">Free Shipping!</h1>
                        <p className="text-green-600">You qualify for free delivery</p>
                    </div>
                </div>
                <div className="my-5 space-y-3">
                    
                    <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>{totalCartPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Shipping</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    
                </div>
                <div className="flex items-center justify-between my-10">
                    <span className="font-semibold">Total</span>
                    <h6 ><span className="font-bold text-2xl">{totalCartPrice}</span> EGP</h6>
                </div>
                <div className="buttons space-y-3">
                    <button className="w-full space-x-2 border border-gray-400/40 hover:text-green-500 hover:bg-green-200/20 hover:border-green-200/20 cursor-pointer transition-colors duration-200 rounded-2xl border-dotted py-4 px-3"><FontAwesomeIcon icon={faTag} /><span>Apply Promo Code</span></button>
                    <button onClick={()=>{
                        router.push('/checkout')

                    }} className="w-full space-x-2 border bg-green-600 hover:bg-green-800 cursor-pointer transition-colors duration-200 rounded-2xl  py-4 shadow-2xl px-3"><FontAwesomeIcon icon={faLock} className="text-white" /><span className="text-white font-bold">Secure Checkout</span></button>
                    
                </div>
                <div className="my-9">
                    <p className=" text-center space-x-2"><span className="space-x-2"><FontAwesomeIcon icon={faShieldHalved} className="text-green-600"/><span>secure payment</span></span> <span className="text-gray-300">|</span> <span className="space-x-2" ><FontAwesomeIcon icon={faTruck} className="text-blue-500"/><span>Fast Delivery</span></span> </p>
                </div>
                <div className="shopping text-center mt-15">
                    <Link className="text-green-600 space-x-2  hover:text-green-800" href={'/shop'}> <FontAwesomeIcon icon={faArrowLeft}/><span>Continue Shopping</span></Link>
                </div>
            </div>

        </div>

    </div></>
        :<div className="header space-y-2">
    
    <div className="cart-empty flex flex-col items-center justify-center mt-10 p-10 rounded-3xl shadow-lg bg-green-50">
        <FontAwesomeIcon icon={faCartShopping} className="text-green-400 text-6xl mb-4" />
        <h2 className="text-2xl font-bold text-green-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link className="text-green-600 space-x-2 hover:text-green-800 text-lg font-semibold flex items-center" href={'/shop'}>
            <FontAwesomeIcon icon={faArrowLeft}/><span>Continue Shopping</span>
        </Link>
    </div>
</div>
        }
  </section>
  
  
  </>
}
