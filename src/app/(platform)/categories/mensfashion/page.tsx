import Productscard from "@/Features/Products/components/Productscard"
import { getproducts } from "@/Features/Products/server/products.server"
import Image from "next/image"


export default async function page() {
  const response=await getproducts()
 
   return <>
   <section>
     <div className="header bg-green-600 p-10 ">
             <div className="flex items-center gap-x-4">
                 <div className="icon shadow-xl rounded-xl flex items-center overflow-hidden justify-center w-20 h-20 bg-green-300/40 text-white p-3 ">
                 <Image src="https://ecommerce.routemisr.com/Route-Academy-categories/1681511865180.jpeg" width={100} height={100} alt="electronics" className=" h-full "/>
 
             </div>
             <div className="text text-white">
                 <h1 className="text-4xl font-bold">Men's Fashion</h1>
                 <p className="text-gray-200">Browse products in Men's Fashion</p>
             </div>
             </div>
 
         </div>
         <div className="cards my-10 grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3  gap-5">
           {response.data.map((product)=>{
             if(product.category.name==="Men's Fashion"){
               return <Productscard info={product}/>
             }
           })}
 
         </div>
         
    </section>
   
   </>
}
