
import { getsinglebrand } from "@/Features/brand/server/brand.server"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faBoxOpen, faTags } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

interface pageparams{
    params:{
        slug:string
    }
}
export default async function page({params}:pageparams) {
    const par=await params
    
    
    

    
   
    
    
  return <>
  <section>
    <div className="header bg-green-600 p-10 ">
                 <div className="flex items-center gap-x-4">
                     <div className="icon shadow-xl rounded-xl flex items-center overflow-hidden justify-center w-20 h-20 bg-green-300/40 text-white p-3 ">
                     <FontAwesomeIcon icon={faTags as IconProp} className="text-white text-4xl"/>
     
                 </div>
                 <div className="text text-white">
                     <h1 className="text-4xl font-bold">{par.slug}</h1>
                     <p className="text-gray-200">Shop {par.slug} products</p>
                 </div>
                 </div>
     
             </div>
  </section>
   <section className="flex flex-col items-center justify-center text-center py-24">
      
      
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <FontAwesomeIcon 
          icon={faBoxOpen as IconProp} 
          className="text-gray-400 text-3xl"
        />
      </div>

      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        No Products Found
      </h2>

      
      <p className="text-gray-500 mb-6">
        No products match your current filters.
      </p>

      
      <Link
        href="/allproducts"
        className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white px-6 py-3 rounded-lg font-medium"
      >
        View All Products
      </Link>

    </section>
  
  
  </>
    
  
}
