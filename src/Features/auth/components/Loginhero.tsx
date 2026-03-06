import Image from "next/image";
import image from '../../../assets/images/2e5810ff3e-e750761ebcd4ae5907db.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";


export default function Loginhero() {
  return <>
  <div className="Loginhero space-y-7">
    <div className="rounded-lg shadow-lg">
        <Image src={image} alt="freshcart image"/>    
    </div>
     <div className="text text-center  p-5">
    <p className="text-3xl font-bold">FreshCart - Your One-Stop Shop for Fresh Products</p>
    <p>Join thousands of happy customers who trust FreshCart for their daily <br/>grocery needs</p>
  </div>
  <ul className="flex items-center gap-x-5 justify-center *:space-x-2">
    <li>
        <FontAwesomeIcon icon={faTruck} className="text-green-600" />
        <span>Free Delivery</span>
    </li>
     <li>
        <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" />
        <span>Secure Payment</span>
    </li>
     <li>
        <FontAwesomeIcon icon={faClock} className="text-green-600" />
        <span>24/7 Support</span>
    </li>
  </ul>
  </div>
 
  </>
}
