import Image from "next/image";
import { Category } from "../types/categoriestypes";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Categorycard({info}:{info:Category}) {
  return <>
  
    <div className="card border cursor-pointer space-y-3 group hover:scale-110 hover:shadow-2xl  transition-all duration-300    text-center border-gray-400/30 rounded-2xl py-4 p-8">
        <div className="img h-60 relative     overflow-hidden flex items-center justify-center  ">
            <Image src={info.image} alt={info.name} width={100} height={100}   className=" group-hover:scale-110 object-cover transition-all duration-200  w-full h-full  "/>
            
        </div>
        <h1 className="group-hover:text-green-600 font-bold">{info.name}</h1>
        <Link className="text-white text-sm group-hover:text-green-600 transition-all duration-200" href={'/subcategories'}>
        <span>view Subcategories </span> <FontAwesomeIcon icon={faArrowRight}/>
        </Link>

    </div>
  

  </>
}
