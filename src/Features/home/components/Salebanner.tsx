import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Salebanner() {
  return <>
  <section className="grid grid-cols-2 gap-x-5 container mx-auto">
    <div className="first div  bg-linear-to-r from-30% from-new    to-[#00835B] rounded-2xl overflow-hidden p-8 space-y-4 before:w-24 before:h-24 before:bg-[#33c1927f] before:absolute relative before:rounded-full before:top-3 before:right-5 before:-translate-y-1/2 before:translate-x-1/2 after:w-24 after:h-24 after:bg-[#33c1927f] after:absolute  after:rounded-full after:bottom-0 after:left-2 after:translate-y-1/2 after:-translate-x-1/2">
        <div className="header px-4 py-1 rounded-full w-fit  bg-[#33C191]">
            
            <span className="text-white">Deals of the Day</span>
           
        </div>
        
             <h1 className="text-2xl text-white font-bold">Fresh Organic Fruits</h1>
            <p className="text-[#CCECE2]">Get up to 40% off on selected organic fruits</p>
            <p><span className="text-white text-4xl font-bold">40% OFFUse</span> code: <span className="text-white font-bold">ORGANIC40</span></p>
        
        <button className="px-5 py-2 text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200 cursor-pointer  rounded-4xl">Shop Now</button>


    </div>
     <div className="first div bg-linear-to-r  from-30% from-[#FF8319]    to-[#FF5447] rounded-2xl overflow-hidden p-8 space-y-4 before:w-24 before:h-24 before:bg-[#FF6F55] before:absolute relative before:rounded-full before:top-3 before:right-5 before:-translate-y-1/2 before:translate-x-1/2 after:w-24 after:h-24 after:bg-[#ff6e55a1] after:absolute  after:rounded-full after:bottom-0 after:left-2 after:translate-y-1/2 after:-translate-x-1/2">
        <div className="header px-4 py-1 rounded-full w-fit  bg-[#ff6e55a9]">
            
            <span className="text-white">New Arrivals</span>
           
        </div>
        
             <h1 className="text-2xl text-white font-bold">Exotic Vegetables</h1>
            <p className="text-[#CCECE2]">Discover our latest collection of premium vegetables</p>
            <p><span className="text-white text-4xl font-bold">25% OFF</span> code: <span className="text-white font-bold">FRESH25</span></p>
        
        <button className="px-5 py-2 text-green-600 bg-white hover:bg-gray-100 transition-colors duration-200 cursor-pointer  rounded-4xl">Explore Now</button>


    </div>
    

  </section>
  
  
  </>
   
  
}
