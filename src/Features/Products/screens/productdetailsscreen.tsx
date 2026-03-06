import Productinfo from "../components/Productinfo"
import Relatedproducts from "../components/Relatedproducts"
import { getsingleproduct } from "../server/products.server"

export default async function Productdetailsscreen({detailsid}:{detailsid:string}){
    const response=await getsingleproduct(detailsid)
    
    return<>
<Productinfo product={response.data}/>
<Relatedproducts productcat={response.data}/>
    
    
    </>
}