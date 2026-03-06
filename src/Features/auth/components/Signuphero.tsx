import { faShieldHalved, faStar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import reviewimage from '../../../assets/images/review-author.png'
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export default function Signuphero() {
  return<>
  <div className="Signuphero space-y-5 ">
    <div className="space-y-3">
        <h1 className="text-4xl">Welcome to <span className="text-green-600">FreshCart</span></h1>
    <p>Join thousands of happy customers who enjoy fresh groceries<br/> delivered right to their doorstep.</p>
    </div>
    <div className="icons space-y-5">
        <div className="flex items-center gap-x-3" >
            <div className="icon flex items-center justify-center w-9 h-9 bg-green-200/90 rounded-full">
                <FontAwesomeIcon icon={faStar as IconProp} className="text-green-600" />
            </div>
            <div className="text">
                <h1 className="font-bold">Premium Quality</h1>
                <p className="text-gray-600">Premium quality products sourced from trusted suppliers.</p>
            </div>

        </div>
         <div className="flex items-center gap-x-3" >
            <div className="icon flex items-center justify-center w-9 h-9 bg-green-200/90 rounded-full">
                <FontAwesomeIcon icon={faTruckFast as IconProp} className="text-green-600" />
            </div>
            <div className="text">
                <h1 className="font-bold">Fast Delivery</h1>
                <p className="text-gray-600">Same-day delivery available in most areas</p>
            </div>

        </div>
         <div className="flex items-center gap-x-3" >
            <div className="icon flex items-center justify-center w-9 h-9 bg-green-200/90 rounded-full">
                <FontAwesomeIcon icon={faShieldHalved as IconProp} className="text-green-600" />
            </div>
            <div className="text">
                <h1 className="font-bold">Secure Shopping</h1>
                <p className="text-gray-600">Your data and payments are completely secure</p>
            </div>

        </div>

    </div>
    <div className="review space-y-3 border border-gray-200 p-2 rounded-2xl">
        <div className="flex items-center gap-x-3">
            <div className="icon w-9 h-9 rounded-full ">
            <Image src={reviewimage} alt="review image"/>
        </div>
        <div className="text">
            <h1>Sarah Johnson</h1>
            {[...Array(5)].map((elm)=><FontAwesomeIcon icon={faStar as IconProp} className="text-yellow-300 text-sm" />)}
        </div>
        </div>
        <p>
            FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
        </p>
    </div>
  </div>
  </>
}
