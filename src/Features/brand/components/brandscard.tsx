import Image from "next/image";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Brand } from "../types/brandtypes";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export default function Brandcard({info}:{info:Brand}) {
    
  return <>
  
   <Link href={`/brands/${info.slug}`}>
   
    <div className="card border cursor-pointer space-y-1 group hover:scale-110 hover:shadow-2xl  transition-all duration-300    text-center border-gray-400/30 rounded-2xl  p-8">
        <div className="img h-20 relative py-1 px-4 bg-gray-400/10 w-2/3 mx-auto      overflow-hidden flex items-center justify-center  ">
            <Image src={info.image} alt={info.name} width={100} height={100}   className=" group-hover:scale-110  transition-all duration-200 w-full  h-full  "/>
            
        </div>
        <h1 className="group-hover:text-violet-600 font-bold">{info.name}</h1>
        <Link className="text-white text-sm group-hover:text-violet-600 transition-all duration-200" href={'/subcategories'}>
        <span>view Subcategories </span> <FontAwesomeIcon icon={faArrowRight as IconProp}/>
        </Link>

    </div>
   </Link>
  

  </>
}
