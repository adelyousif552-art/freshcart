'use client'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'

import sliderimage from '../../../assets/images/home-slider-1.png'
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Slider() {
  return <>
  <section className='relative z-10 bg-red-600'>
    <Swiper modules={[Navigation,Pagination]} navigation={{
        prevEl:'.previous',
        nextEl:'.next'
    }} pagination={{clickable:true}} loop={true}>
    <SwiperSlide>
      <div style={{
        backgroundImage:`url(${sliderimage.src})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }} className='h-100  '>
       <div className="overlay w-full h-full flex items-center bg-linear-to-r from-green-500/80 to-green-100/50">
       <div className="container max-w-8xl mx-auto space-y-3">
       <div>
         <h1 className='text-white font-bold text-4xl '>
            Fresh Products Delivered <br/> To Your Door
        </h1>
        <p className='text-white text-lg'>Get 20% off your first order</p>
       </div>
        <div className='buttons space-x-3'>
            <button className='bg-white font-bold text-green-600 py-2 px-7 rounded-xl hover:scale-110 transition-all duration-200'>
                Shop Now
            </button>
            <button className=' border font-bold border-white text-white py-2 px-7 rounded-xl hover:scale-110 transition-all duration-200'>
                View Deals
            </button>

        </div>
       </div>

       </div>
        

      </div>
    </SwiperSlide>
    <SwiperSlide>
          <div style={{
        backgroundImage:`url(${sliderimage.src})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }} className='h-100  '>
       <div className="overlay w-full h-full flex items-center bg-linear-to-r from-green-500/80 to-green-100/50">
       <div className="container max-w-8xl mx-auto space-y-3">
       
         <h1 className='text-white font-bold text-4xl '>
            Premium Quality<br/> Guaranteed
        </h1>
        <p className='text-white text-lg'>fresh from farm to your table</p>
       
        <div className='buttons space-x-3'>
            <button className='bg-white font-bold text-blue-500 py-2 px-7 rounded-xl hover:scale-110 transition-all duration-200'>
                Shop Now
            </button>
            <button className=' border font-bold border-white text-white py-2 px-7 rounded-xl hover:scale-110 transition-all duration-200'>
                Learn More
            </button>

        </div>
       </div>

       </div>
        

      </div>
       
    </SwiperSlide>
    <SwiperSlide>
         <div style={{
        backgroundImage:`url(${sliderimage.src})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }} className='h-100  '>
       <div className="overlay w-full h-full flex items-center bg-linear-to-r from-green-500/80 to-green-100/50">
       <div className="container max-w-8xl mx-auto space-y-3">
       <div>
         <h1 className='text-white font-bold text-4xl '>
            Fast & Free Delivery
        </h1>
        <p className='text-white text-lg'>same day delivery available</p>
       </div>
        <div className='buttons space-x-3'>
            <button className='bg-white font-bold text-violet-500 py-2 px-7 rounded-xl hover:scale-110 transition-all duration-200'>
                Order Now
            </button>
            <button className=' border font-bold border-white text-white py-2 px-7 rounded-xl hover:scale-110 transition-all duration-200'>
                Delivery Info
            </button>

        </div>
       </div>

       </div>
        

      </div>
       
    </SwiperSlide>


  </Swiper>
  <div className="previous cursor-pointer w-9 h-9 bg-white text-green-600 rounded-full z-10  flex items-center justify-center absolute top-1/2 -translate-y-1/2">
    <FontAwesomeIcon icon={faChevronLeft}/>
  </div>
   <div className="next w-9 h-9 cursor-pointer bg-white text-green-600 rounded-full z-10  flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 ">
    <FontAwesomeIcon icon={faChevronRight}/>
  </div>
  
  </section>
  </>
    
  
}
