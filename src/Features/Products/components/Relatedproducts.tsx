'use client'
import { SwiperSlide,Swiper } from "swiper/react";
import { getproducts } from "../server/products.server"
import { Product } from "../types/productstypes"
import Productscard from "./Productscard";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";



export default  function Relatedproducts({productcat}:{productcat:Product}) {
    const [products, setproducts] = useState<Product[] | null>(null)
   
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getproducts({ category: productcat.category._id });
            setproducts(response.data);
        };
        fetchProducts();
    }, [productcat.category._id]);
    
    
  return <>
  <section className="my-10">
   <div className="flex items-center justify-between space-y-10">
     <div className="header mx-4 py-3 px-5 before:w-2 before:h-8 before:absolute relative before:bg-green-600 before:left-0">
        <h1 className="text-2xl">You May Also <span className="text-green-600">Like</span></h1>
    </div>
    <div className="flex items-center gap-x-3">
        <div className=" previous icon cursor-pointer w-9 h-9 bg-gray-400/20 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowLeft as IconProp}/>
        </div>
         <div className=" next icon w-9 h-9 cursor-pointer bg-gray-400/20 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowRight as IconProp}/>
        </div>
    </div>
   </div>
    
        
            <Swiper modules={[Navigation]} navigation={{nextEl:'.next',prevEl:'.previous'}}  slidesPerView={5} loop={true} spaceBetween={20}>
                {products && products.map((product)=>{
            return<>
           
                   <SwiperSlide >
                     <Productscard info={product}/>
                   </SwiperSlide>
                
            </>
        })}
            </Swiper>
        
    
  </section>

  
  
  </>
}
