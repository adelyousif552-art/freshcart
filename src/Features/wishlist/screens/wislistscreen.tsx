'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { getwishlist } from "../server/wishlist.server";
import WishlistCard from "../component/wishlist card";
import { useSelector } from "react-redux";
import { appstate } from "@/store/store";


export default  function WishlistPage() {
   const {count,products}=useSelector((state:appstate)=>state.wishlist)
   
   
  

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10">

        
        <div className="text-sm text-gray-500 mb-6">
          Home <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Wishlist</span>
        </div>

        
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              My Wishlist
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {count} items saved
            </p>
          </div>
        </div>

        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          
          <div className="grid grid-cols-12 px-10 py-5 bg-gray-50 text-gray-500 text-sm font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Actions</div>
          </div>

          {products.map((items)=>{
            return <WishlistCard key={items._id} info={items}/>
          })}
        </div>

        
        <div className="mt-8">
          <button className="text-gray-600 hover:text-black text-sm transition">
            ← Continue Shopping
          </button>
        </div>

      </div>
    </div>
  );
}