
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faCity, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Address, AddressupdResponse } from "../types/addresstype";
import { removeaddress, updateaddress } from "../server/addressserver";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressschema, addressvalidate } from "../schema/addressschema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export default  function AddressCard({info,addressfun}:{info:Address,addressfun:any}) {
 async function deleteaddr(id:string){
     const response=await removeaddress(id)
     console.log(response);
     
     await addressfun()
     if(response.status==='success'){
        toast.success(response.message)
     }
  
 }
 
 
    
  
  return <>
  
   <div className="bg-white my-3 rounded-2xl shadow-md border border-gray-200 p-6 flex justify-between items-start hover:shadow-lg transition">

      <div className="flex gap-4">
        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
          <FontAwesomeIcon icon={faLocationDot} className="text-green-600 text-xl" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">
            {info.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {info.details}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm pt-1">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
              <span>{info.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCity} className="text-gray-400" />
              <span>{info.city}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
          <FontAwesomeIcon icon={faPen} className="text-gray-600 text-sm" />
        </button>

        <button onClick={()=>{
            deleteaddr(info._id)
            
        }} type="button" className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-100 flex items-center justify-center transition">
          <FontAwesomeIcon icon={faTrash} className="text-gray-600 hover:text-red-600 text-sm" />
        </button>
      </div>

    </div>

  
  
  </>
   
    
  ;
}


