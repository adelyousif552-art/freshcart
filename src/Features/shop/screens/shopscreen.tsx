import Productscard from "@/Features/Products/components/Productscard";
import { getproducts } from "@/Features/Products/server/products.server";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Shopscreen(){
    const response=await getproducts()
    
    
    return <>
    <section className="">
        <div className="header bg-green-600 p-10 ">
            <div className="flex items-center gap-x-2">
                <div className="icon shadow-xl rounded-xl flex items-center justify-center w-16 h-16 bg-green-300/40 text-white ">
                <FontAwesomeIcon icon={faBoxOpen as IconProp} className="text-2xl" />

            </div>
            <div className="text text-white">
                <h1 className="text-4xl font-bold">All Products</h1>
                <p className="text-gray-200">Explore our complete product collection</p>
            </div>
            </div>

        </div>
        <div className="products p-5">
            <p className="text-gray-500">Showing 40 products</p>
           <div className="cards grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3  gap-5">
             {response.data.map((product)=>{
                return <Productscard info={product}/>
            })}
           </div>

        </div>
    </section>
    
    </>
}