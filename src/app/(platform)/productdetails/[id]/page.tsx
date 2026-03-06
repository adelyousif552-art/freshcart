import Productdetailsscreen from "@/Features/Products/screens/productdetailsscreen";
type paramstype={
    params:Promise<{id:string}>
}
export default async function  productdetailsPage({params}:paramstype) {
    const {id}=await params
    return <>
   <Productdetailsscreen detailsid={id}/>
    
               
    
    </>
}