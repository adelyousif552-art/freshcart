import Productscard from "@/Features/Products/components/Productscard"
import { getproducts } from "@/Features/Products/server/products.server"


export default async function Featuredproducts() {
    const response=await getproducts()
    

  return <>
  <section className="products p-10">
<div className="header">
    <h1 className="font-bold text-4xl     px-3 before:w-2 before:h-10 before:bg-green-600 before:absolute relative before:left-0 ">Featured <span className="text-green-600">Products</span></h1>
</div>
<div  className="cards grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3  gap-5">
    {response.data.map((product)=>{
        return  <Productscard key={product._id}  info={product}/>
        
    })}
</div>

  </section>

  
  
  
  
  </>
}
