import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRotateLeft, faHeadset, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Promobanner(){
    return <>
    <section className="px-10 py-8 bg-gray-100/50 ">
        <div className="cards lg:flex lg:items-center lg:*:grow space-x-5 space-y-5">
            <div className="card hover:scale-x-105 transition-all duration-200 bg-white shadow flex items-center space-x-4 py-3 px-3 rounded-2xl">
                <div className="icon w-12 h-12 flex items-center justify-center rounded-full bg-blue-200/50">
                    <FontAwesomeIcon icon={faTruck as IconProp} className="text-blue-500 text-xl"/>
                </div>
                <div className="text">
                    <h1 className="text-lg font-semibold">Free Shipping</h1>
                    <p className="text-gray-400">on orders over 500EGP</p>
                </div>
            </div>
             <div className="card hover:scale-x-105 transition-all duration-200 bg-white shadow flex items-center space-x-4 py-3 px-3 rounded-2xl">
                <div className="icon w-12 h-12 flex items-center justify-center rounded-full bg-green-200/50">
                    <FontAwesomeIcon icon={faShieldHalved as IconProp} className="text-green-600 text-xl"/>
                </div>
                <div className="text">
                    <h1 className="text-lg font-semibold">Secure Payment</h1>
                    <p className="text-gray-400">100% secure transactions</p>
                </div>
            </div>
             <div className="card hover:scale-x-105 transition-all duration-200 bg-white shadow flex items-center space-x-4 py-3 px-3 rounded-2xl">
                <div className="icon w-12 h-12 flex items-center justify-center rounded-full bg-orange-200/50">
                    <FontAwesomeIcon icon={faArrowRotateLeft as IconProp} className="text-orange-500 text-xl"/>
                </div>
                <div className="text">
                    <h1 className="text-lg font-semibold">Easy Returns</h1>
                    <p className="text-gray-400">14-day return policy</p>
                </div>
            </div>
             <div className="card hover:scale-x-105 transition-all duration-200 bg-white shadow flex items-center space-x-4 py-3 px-3 rounded-2xl">
                <div className="icon w-12 h-12 flex items-center justify-center rounded-full bg-violet-200/50">
                    <FontAwesomeIcon icon={faHeadset as IconProp} className="text-violet-500 text-xl"/>
                </div>
                <div className="text">
                    <h1 className="text-lg font-semibold">24/7 Support</h1>
                    <p className="text-gray-400">Dedicated support team</p>
                </div>
            </div>
            
        </div>
    </section>
    
    
    
    </>
}