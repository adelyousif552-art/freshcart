'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../types/productstypes";
import Rating from "./Rating";
import { faCartShopping, faCheck, faHeart, faInfo, faMinus, faPlus, faRotateLeft, faShareNodes, faShieldHalved, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { } from "@fortawesome/free-regular-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import Link from "next/link";


export default function Productinfo({product}:{product:Product}) {
  
  const [detailsisopen,setdetailsisopen]=useState(true)
  const [reviewsisopen,setreviewsisopen]=useState(false)
  const [shippingisopen,setshippingisopen]=useState(false)
  const [count,setcount]=useState(1)
    const {price,priceAfterDiscount,reviews,title,description,brand,images,id,subcategory,category,ratingsQuantity,ratingsAverage,quantity}=product
    const discount=priceAfterDiscount?(price-priceAfterDiscount)/price*100:0
    const onsale=priceAfterDiscount?priceAfterDiscount<price:false
    const islowstock=quantity>0&&quantity<10
    const percentof5=(reviews.filter(num=>num.rating===5).length/ratingsQuantity)*100
    const percentof4=(reviews.filter(num=>num.rating===4).length/ratingsQuantity)*100
    const percentof3=(reviews.filter(num=>num.rating===3).length/ratingsQuantity)*100
    const percentof2=(reviews.filter(num=>num.rating===2).length/ratingsQuantity)*100
    const percentof1=(reviews.filter(num=>num.rating===1).length/ratingsQuantity)*100
    console.log(percentof5);
    
    
    
    
    
  return <>
  <section className="grid grid-cols-12 my-20 ">
    <div className="images col-span-3  border border-gray-300/40 p-3  shadow h-80">
      <ImageGallery items={images.map((image)=>{
        return {
          original:image,
          thumbnail:image
        }
      })}
      showFullscreenButton={false}
      showNav={false}
      showPlayButton={false}
      
      />

    </div>
    <div className="detils col-span-9 border border-gray-300/40 p-8 space-y-3">
     <div className="space-x-3">
       <span className="bg-green-300/20 rounded-full py-1 px-2 text-green-800">{category.name}</span>
      <span className="py-1 px-2 rounded-full bg-gray-400/20">{brand.name}</span>
     </div>
     <h1 className="font-bold text-2xl">{title}</h1>
     <div className="rating flex items-center gap-x-1">
      <Rating rating={ratingsAverage}/>
      <span>{ratingsAverage}</span>
      <span>({ratingsQuantity})</span>
     </div>
     {onsale?<div className="flex items-center gap-x-2">
      <h1 className="font-bold text-5xl">{priceAfterDiscount}</h1>
      <span className="text-gray-400 line-through text-2xl">{price}</span>
      <span className="px-3 py-1 bg-red-600 text-white rounded-full ">save{discount.toFixed(0)}%</span>
     </div>:<div>
      <h1 className="font-bold">{price}</h1>
      </div>}
      <div className="stock">
        {quantity>0?<div className={`${islowstock?'bg-yellow-200/50':'bg-green-200/50'} w-fit rounded-full py-1 px-2 flex items-center gap-x-2`}>
         <div className={`w-3 h-3 rounded-full ${islowstock?'bg-yellow-300':'bg-green-400'} `}></div>
          <span className={`${islowstock?"text-yellow-300":"text-green-600"} text-sm`}>{islowstock?`only${quantity}left`:'in stock'}</span>
        </div>:''}

      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="quantity space-y-1 space-x-2 flex items-center">
     <div>
        <div>
         <label htmlFor="">quantity</label>
       </div>
        <div className="border w-fit border-gray-400/60  ">
          <button className="hover:bg-gray-200/40 transition-colors duration-200 cursor-pointer p-4" onClick={()=>{
            setcount(count-1)
          }}><FontAwesomeIcon icon={faMinus}/></button>
          <input type="number" className=" focus:outline-none w-20 text-center" value={count} onChange={(e)=>{
            setcount(+e.target.value)
          }} />
          <button className="p-4 hover:bg-gray-200/40 transition-colors duration-200 cursor-pointer" onClick={()=>{
            setcount(count+1)
          }}><FontAwesomeIcon icon={faPlus}/></button>
          

        </div>
     </div>
        <div className=" pt-5">
          <span className="text-small text-gray-400 ">{quantity} available</span>
        </div>
      </div>
      <div className="price flex items-center justify-between bg-gray-300/20 p-2">
        <span>Total Price:</span>
        <span className="text-2xl text-green-600 font-bold">{priceAfterDiscount*count||price*count}EGP</span>

      </div>
      <div className="buttons flex *:grow items-center space-x-2">
        <button className="text-white rounded-2xl px-2 py-4 space-x-2 bg-green-600 cursor-pointer hover:bg-green-800 transition-colors duration-200 "><FontAwesomeIcon icon={faCartShopping} /><span>Add to Cart</span></button>
        <button className="text-white rounded-2xl px-2 py-4 space-x-2 bg-black hover:bg-black/80 cursor-pointer transition-colors duration-200">Buy Now</button>
      </div>
      <div className="wishlistbtn&sharebtn flex gap-x-2 *:cursor-pointer">
        <button className="bg-white text-red-500 rounded-2xl border border-red-500/50 w-10/12 py-4 px-2"><FontAwesomeIcon icon={faHeart}/> <span>in Wishlist</span></button>
        <button className="hover:text-green-600 border hover:border-green-600 transition-colors duration-200 py-4 px-2  rounded-2xl grow"><FontAwesomeIcon icon={faShareNodes}/></button>


      </div>
      <div className="icons flex items-center *:grow">
        <div className="flex items-center gap-x-2">
          <div className="icon w-12 h-12 bg-green-300/40 flex items-center justify-center rounded-full">
          <FontAwesomeIcon icon={faTruck} className="text-green-400"/>
        </div>
        <div className="text">
          <h1>Free Delivery</h1>
          <p className="text-gray-400">Orders over $50</p>
        </div>
        </div>
         <div className="flex items-center gap-x-2">
          <div className="icon w-12 h-12 bg-green-300/40 flex items-center justify-center rounded-full">
          <FontAwesomeIcon icon={faRotateLeft} className="text-green-400"/>
        </div>
        <div className="text">
          <h1>30 Days Return</h1>
          <p className="text-gray-400">Money back</p>
        </div>
        </div>
         <div className="flex items-center gap-x-2">
          <div className="icon w-12 h-12 bg-green-300/40 flex items-center justify-center rounded-full">
          <FontAwesomeIcon icon={faShieldHalved} className="text-green-400"/>
        </div>
        <div className="text">
          <h1>Secure Payment</h1>
          <p className="text-gray-400">100% Protected</p>
        </div>
        </div>
      </div>


    </div>

  </section>
  <section className="tabs">
    <div className="buttons flex items-center *:space-x-2  *:p-6">
     <div className={`productdetails  transition-colors duration-200 border-b ${detailsisopen?'border-green-600 bg-green-300/20 text-green-500':''} border-gray-400/50`}>
       <span><FontAwesomeIcon icon={faInfo} /></span>
      <Link href={''} onClick={()=>{
        setdetailsisopen(true)
        setreviewsisopen(false)
        setshippingisopen(false)
      }}>Product Details</Link>
     </div>
     <div className={`productdetails  transition-colors duration-200 border-b ${reviewsisopen?'border-green-600 bg-green-300/20 text-green-500':''} border-gray-400/50`}>
       <span><FontAwesomeIcon icon={faStar} /></span>
      <Link  href={''} onClick={()=>{
        setdetailsisopen(false)
        setreviewsisopen(true)
        setshippingisopen(false)
      }}>Reviews ({ratingsQuantity})</Link>
     </div>
     <div className={`productdetails  transition-colors duration-200 border-b ${shippingisopen?'border-green-600 bg-green-300/20 text-green-500':''} border-gray-400/50`}>
       <span><FontAwesomeIcon icon={faTruck} /></span>
      <Link onClick={()=>{
        setshippingisopen(true)
        setreviewsisopen(false)
        setdetailsisopen(false)
      }} href={''}>Shipping & Returns</Link>
     </div>
    </div>
    {detailsisopen?<div className="productdetails space-y-4 p-8">
     <div>
      <h1 className="font-bold">About this Product</h1>
     <p>ShellFabric1 Cotton 65% Polyester 35%</p>
     </div>
    <div className="grid grid-cols-2 px-10 space-x-4">
      <div className=" bg-gray-300/30 p-3 rounded-lg space-y-5">
      <h1 className="font-semibold">Product Information</h1>
    <div className="flex items-center justify-between">
         <ul>
      <li>
        Category
      </li>
      <li>Subcategory</li>
      <li>Brand</li>
      <li>Items Sold</li>
     </ul>
     <ul>
      <li>{category.name}</li>
      <li>{subcategory[0].name}</li>
      <li>{brand.name}</li>
      <li>+sold</li>
     </ul>
    </div>
    </div>
    <div className="keyfeatures p-3 bg-gray-300/30 rounded-lg space-y-5 ">
      <h1 className="font-semibold">Key Features</h1>
      <ul>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-600" /> <span>Premium Quality Product</span></li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-600" /> <span>100% Authentic Guarantee</span></li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-600" /> <span>Fast & Secure Packaging</span></li>
        <li><FontAwesomeIcon icon={faCheck} className="text-green-600" /> <span>Quality Tested</span></li>

      </ul>
    </div>

    </div>
    </div>:''}
    {reviewsisopen?<div className="reviews my-10 grid grid-cols-12">
      <div className="rate col-span-2 text-center  flex items-center justify-center">
        <div>
          <h1 className="font-bold text-2xl">{ratingsAverage}</h1>
        <Rating rating={ratingsAverage}/>
        <p>Based on {ratingsQuantity} reviews</p>
        </div>

      </div>
      <div className="progressbar col-span-10">
        <div className="flex items-center space-x-3">
          <div className="text-center">
            <p>5</p>
            <p>Star</p>
          </div>
          <div className="bar  h-4 grow relative rounded-full bg-gray-400/20">
            <div className={` h-3.5   bg-yellow-400 absolute rounded-full left-0`} style={{width:`${percentof5}%`}}></div>
            
          </div>

        </div>
         <div className="flex items-center space-x-3">
          <div className="text-center">
            <p>4</p>
            <p>Star</p>
          </div>
          <div className="bar  h-4 grow rounded-full relative bg-gray-400/20">
            <div className={` h-3.5 rounded-full bg-yellow-400 absolute left-0`} style={{width:`${percentof4}%`}}></div>
          </div>

        </div>
         <div className="flex items-center space-x-3">
          <div className="text-center">
            <p>3</p>
            <p>Star</p>
          </div>
          <div className="bar  h-4 grow rounded-full relative bg-gray-400/20">
            <div className={` h-3.5 rounded-full bg-yellow-400 absolute left-0`} style={{width:`${percentof3}%`}}></div>
          </div>

        </div>
         <div className="flex items-center space-x-3">
          <div className="text-center">
            <p>2</p>
            <p>Star</p>
          </div>
          <div className="bar  h-4 grow rounded-full relative bg-gray-400/20">
            <div className={` h-3.5 rounded-full bg-yellow-400 absolute left-0`} style={{width:`${percentof2}%`}}></div>
          </div>

        </div>
         <div className="flex items-center space-x-3">
          <div className="text-center">
            <p>1</p>
            <p>Star</p>
          </div>
          <div className="bar  h-4 grow rounded-full relative bg-gray-400/20">
            <div className={` h-3.5 rounded-full bg-yellow-400 absolute left-0`} style={{width:`${percentof1}%`}}></div>
          </div>

        </div>

      </div>

    </div>:''}
   {shippingisopen? <div className="shipping">
      <div className="grid grid-cols-2">
        <div className="shippinginformation mx-8 my-8 p-5 bg-green-300/30 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="icon w-12 h-12 bg-green-300/30 flex items-center justify-center rounded-full">
            <FontAwesomeIcon icon={faTruck} className="text-green-600"/>

          </div>
          <h1 className="font-semibold">Shipping Information</h1>
          </div>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} className="text-green-600"/> <span>Free shipping on orders over $50</span></li>
             <li><FontAwesomeIcon icon={faCheck} className="text-green-600"/> <span>Standard delivery: 3-5 business days</span></li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-600"/> <span>Express delivery available (1-2 business days)</span></li>
               <li><FontAwesomeIcon icon={faCheck} className="text-green-600"/> <span>Track your order in real-time</span></li>
          </ul>
        </div>
        <div className="refunds bg-green-300/30 p-5 mx-8 my-8 space-y-3">
         <div className="flex items-center space-x-2">
            <div className="icon  w-12 h-12 bg-green-300/30 flex items-center justify-center rounded-full">
            <FontAwesomeIcon icon={faRotateLeft} className="text-green-600"/>

          </div>
          <h1 className="font-semibold">Returns & Refunds</h1>
          </div>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} className="text-green-600"/> <span>30-day hassle-free returns</span></li>
             <li><FontAwesomeIcon icon={faCheck} className="text-green-600"/> <span>Full refund or exchange available</span></li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-600"/> <span>Free return shipping on defective items</span></li>
               <li><FontAwesomeIcon icon={faCheck} className="text-green-600"/> <span>Easy online return process</span></li>
          </ul>


        </div>
      </div>
      <div className="flex items-center gap-x-5 bg-gray-300/20 mx-8 p-5">
        <div className="icon w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full">
          <FontAwesomeIcon icon={faShieldHalved}/>
        </div>
        <div>
          <h1 className="font-bold">Buyer Protection Guarantee</h1>
          <p>Get a full refund if your order doesn't arrive or isn't as described. We ensure your shopping experience is safe and secure.</p>
        </div>
      </div>
    </div>:''}
  </section>
  
  
  </>
}
