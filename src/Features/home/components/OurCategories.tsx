import { getallcategories } from "@/Features/Categories/server/categories.server"
import { Category } from "@/Features/Categories/types/categoriestypes"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"


export default async function OurCategories() {
    const response=await getallcategories()
    
  return <>
  <section className="categories p-10">
    <div className="header lg:flex lg:items-center lg:justify-between space-y-5 ">
        <h1 className="font-bold text-4xl     px-3 before:w-2 before:h-10 before:bg-green-600 before:absolute relative before:left-0 ">Shop By <span className="text-green-600">Category</span></h1>
        <Link href={'/allcategories'} className="text-green-600  flex items-center hover:text-green-800 transition-colors duration-200">
        <span>View All Categories</span>
        <FontAwesomeIcon icon={faArrowRight as IconProp}/>
        </Link>
    </div>
    <div className="cards my-6 grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2  space-x-3 space-y-3">
     {response.data.map((elm)=>{
        return <div key={elm._id}>

         <Link  href={`categories/${elm._id}`}>
          <div className="card shadow p-10 flex flex-col items-center gap-y-3 hover:shadow-lg transition-all duration-200">
            <div className="img w-20 h-20 rounded-full ">
                <Image src={elm.image} width={100} height={100} alt="" className="w-full h-full object-cover rounded-full"/>
            </div>
            <h4>{elm.name}</h4>

        </div>
         
         
         </Link>
</div>

     })}
    </div>
  </section>
  
  
  </>

  
}
