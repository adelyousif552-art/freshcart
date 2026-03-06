
import Brandcard from "@/Features/brand/components/brandscard"
import { getbrands } from "@/Features/brand/server/brand.server"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default async function  brandspage() {
    const response=await getbrands()
    return <>
    <section>
        <div className="header bg-violet-500 p-10 ">
            <div className="flex items-center gap-x-4">
                <div className="icon shadow-xl rounded-xl flex items-center justify-center w-20 h-20 bg-violet-400 text-white ">
                <FontAwesomeIcon icon={faTags} className="text-4xl" />
            </div>
            <div className="text text-white">
                <h1 className="text-4xl font-bold">Top Brands</h1>
                <p className="text-gray-200">Shop from your favorite brands</p>
            </div>
            </div>

        </div>
        <div className="cards my-10 px-5 grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3  gap-5">
            {response.data.map((product)=>{
                return <Brandcard info={product}/>
            })}

        </div>
    </section>
    
    
    
    
    </>
}