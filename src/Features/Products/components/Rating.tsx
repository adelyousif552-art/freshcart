import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {  faStar as regularstar } from "@fortawesome/free-regular-svg-icons"
import { faStarHalfStroke, faStar as solidstar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"


export default function Rating({rating}:{rating:number}):ReactNode {
    function getposition(pos:number){
        if(rating>=pos){
            return solidstar
        }else if(rating>=pos-0.5){
            return faStarHalfStroke
        }else{
            return regularstar
        }
       

    }
  return <>
  <div className="stars text-yellow-400">
  
{[1,2,3,4,5].map((pos,index)=>{
    return <FontAwesomeIcon key={index} icon={getposition(pos) as IconProp}/>
})}


  </div>
  
  
  </>
}
