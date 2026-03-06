import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getallcategories } from "../server/categories.server";
import Categorycard from "../components/categorycard";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default async function Categoryscreen(){
    const response=await getallcategories()
    return <>
     <div className="header bg-green-600 p-10 ">
            <div className="flex items-center gap-x-4">
                <div className="icon shadow-xl rounded-xl flex items-center justify-center w-20 h-20 bg-green-300/40 text-white ">
                <FontAwesomeIcon icon={faLayerGroup as IconProp} className="text-4xl" />

            </div>
            <div className="text text-white">
                <h1 className="text-2xl font-bold">All Categories</h1>
                <p className="text-gray-400/30">Browse our wide range of product categories</p>
            </div>
            </div>

        </div>
        <div className="cards my-10 px-5 grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3  gap-5">
            {response.data.map((cat)=>{
                return <Categorycard info={cat}/>
            })}

        </div>



    </>
}