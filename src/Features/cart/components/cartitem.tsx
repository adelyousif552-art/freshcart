import Image from "next/image";
import { CartProduct } from "../types/carttypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import { deleteproduct, updateproduct } from "../server/addproductserver";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartsliceactions } from "../store/cartslice";


export default function Cartitem({product}:{product:CartProduct}) {
    const dispatch=useDispatch()

    const handleremove= async()=>{
       const result= await Swal.fire({
            html:` <div class="alert  py-2 space-y-2  flex flex-col items-center max-w-xl mx-auto ">
    <div class="deleteicon w-12 h-12 flex items-center justify-center bg-red-300/30 rounded-full">
        <svg class='text-red-500 size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

    </div>
    <h1 class="font-bold">Remove item?</h1>
    <p class="text-gray-400 text-xs">Remove <span class="font-semibold text-black">${product.product.title.slice(0,40)}${product.product.title.length>40?'...':''}</span> from your cart?</p>
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
             dispatch(cartsliceactions.removeproduct({id:product.product.id}))
            await deleteproduct(product.product.id)
           
            toast.success('product is deleted successfully')

        }
    }
    const handleupdate=async(newcount:number)=>{
        
        if(newcount<1){
            return;
        }
        try {
           const response=await updateproduct(product.product.id,newcount)
           dispatch(cartsliceactions.setcartinfo(response))
          

           
        } catch (error) {
            console.log(error);
            
        }
    }
  return <>
  <div className="card relative shadow-lg p-6 rounded-xl flex items-center  space-x-6">
    <div className="space-y-5  ">
        <div className="image w-30 h-30 bg-linear-to-br from-white to-gray-400/20 p-5 flex items-center justify-center">
        <Image src={product.product.imageCover} alt={product.product.title}width={100} height={100}/>
    </div>
    <div className="bg-green-600 w-fit rounded-full px-2 ml-auto ">
        <p className="text-white text-sm"><FontAwesomeIcon icon={faCheck}/><span>in stock</span></p>

    </div>
    </div>
    <div className="space-y-3">
        <h1 className="font-semibold text-xl">{product.product.title}</h1>
       <div>
         <div className="w-fit bg-green-300/20 text-green-600  px-2 rounded-full">
            <p>{product.product.category.name}</p>
        </div>
        
       </div>
       <div>
        <h1 className="text-green-700 text-2xl">{product.price}<span> EGP</span> <span className="text-gray-400 text-sm">Per Unit</span></h1>
       </div>
       <div className=" w-fit">
        <div className="rounded-2xl flex  items-center justify-between bg-gray-400/10 p-1 space-x-3 ">
       <button onClick={()=>{
        handleupdate(product.count-1)
       }} className={` ${product.count==1?'cursor-not-allowed text-gray-500/40':'cursor-pointer'} bg-white py-2 px-3 shadow-lg rounded-xl`}><FontAwesomeIcon icon={faMinus}/></button>
       <span>{product.count}</span>
       <button disabled={product.count>product.product.quantity}  onClick={()=>{
        handleupdate(product.count+1)
       }} className="cursor-pointer bg-green-600 text-white py-2 px-3 shadow-lg rounded-xl hover:bg-green-800 transition-colors duration-200"><FontAwesomeIcon icon={faPlus}/></button>

       </div>
       
        
       
       </div>
    </div>
    <div className="absolute right-4 bottom-4">
       <div className="flex items-center gap-x-4">
         <div>
            <div className="  text-right "><h1 className="">total</h1></div>
        <div>
            <h1><span className="text-2xl font-bold">{product.price*product.count}</span> <span>EGP</span></h1>
       
        </div>
         </div>
        <div className="button">
            <button onClick={handleremove} className="p-2 cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-200 rounded-lg bg-red-200/30 text-red-500"><FontAwesomeIcon icon={faTrash} className="" /></button>
        </div>
       </div>
    </div>

  </div>
 

  
  
  </>
}
