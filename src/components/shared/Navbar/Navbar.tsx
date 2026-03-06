
'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faArrowDown, faArrowRightFromBracket, faArrowsRotate, faBars, faBoxOpen, faCartArrowDown, faCartShopping, faChevronDown, faGear, faGift, faHeadphones, faListUl, faMagnifyingGlass, faPhone, faTruck, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook, faCircleUser, faEnvelope, faHeart, faListAlt, faUser, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import logo from '../../../assets/images/freshcart-logo.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { appstate } from '@/store/store';
import useLogout from '@/Features/auth/Hooks/uselogout';
import { getwishlist } from '@/Features/wishlist/server/wishlist.server';


import { useEffect } from 'react';
import { ProductsResponse } from '@/Features/wishlist/types/wishlisttypes';
import { set } from 'zod';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function  Navbar() {
    const [userinfoopened,setuserinfoopened]=useState(false)
    const{numOfCartItems}=useSelector((state:appstate)=>state.cart)
     const{count}=useSelector((state:appstate)=>state.wishlist)
     
     
    

   
    const {logout}= useLogout()
    
    const {isloggedin}= useSelector((appState:appstate)=>appState.auth)
    const [menuisopen,setmenuisopen]=useState(false)
    function toggle(){
        setmenuisopen(!menuisopen)
    }
  
  return <>
    <header>
        <div className=" relative">
            <div className="top_nav border-b hidden xl:flex border-gray-200 px-3 py-1  items-center justify-between">
                <ul className='flex items-center gap-x-2 *:flex *:items-center *:gap-x-2'>
                    <li>
                        <FontAwesomeIcon icon={faTruck as IconProp} className='w-5 text-green-600'/>
                        <span className='text-sm'>Free Shipping on Orders 500 EGP</span>
                    </li>
                     <li>
                        <FontAwesomeIcon icon={faGift as IconProp} className='w-5 text-green-600' />
                        <span className='text-sm'>New Arrivals Daily</span>
                    </li>
                </ul>
                <ul className='flex items-center gap-x-4 '>
                    <li><a href=".tel:+1 (800) 123-4567" className='flex items-center gap-x-3 hover:text-green-400 transition-colors duration-200'><FontAwesomeIcon icon={faPhone as IconProp} className='w-5' /><span>+1 (800) 123-4567</span></a></li>
                    <li className='border-r px-4 border-gray-200 hover:text-green-400 transition-colors duration-200'><a href=".mailto:support@freshcart.com" className='flex items-center gap-x-3'><FontAwesomeIcon icon={faEnvelope as IconProp} className='w-5' /> <span>support@freshcart.com</span></a></li>
                  {isloggedin?  <li onClick={logout} className='flex cursor-pointer hover:text-green-400 transition-colors duration-200 items-center gap-x-3'>
                        
                        Logout
                    </li>
                    :<>
                      <li className='flex cursor-pointer hover:text-green-400 transition-colors duration-200 items-center gap-x-3'>
                        <FontAwesomeIcon icon={faUser as IconProp} className='w-5' />
                        <span>sign in</span>
                    </li>
                    <li className='flex items-center gap-x-3 cursor-pointer hover:text-green-400 transition-colors duration-200'>
                        <FontAwesomeIcon icon={faUserPlus as IconProp} className='w-5' />
                        <span>sign up</span>
                    </li></>}
                </ul>

            </div>
            <div className="second-nav max-w-full border-b border-gray-200 px-3 py-4  flex items-center justify-between ">
                <h1>
                    <Link href={'/'}>
                    <Image src={logo} alt='fresh cart logo'/>
                    </Link>
                </h1>
                <search className=' relative hidden xl:block'>
                    <input type="text" className='form-control w-90 lg:w-75 placeholder:text-sm placeholder:text-gray-500' placeholder='search for products, brands and more' />
                    <div className='bg-green-600 hover:bg-green-700 transition-colors duration-200 w-9 h-9 absolute right-2  rounded-full   top-1/2 -translate-y-1/2 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} className='w-3 text-white ' />
                    </div>

                </search>
                <ul className=' items-center gap-x-8 hidden xl:flex '>
                    <li>
                        <Link href={'/'} className='text-lg hover:text-green-400 transition-colors duration-200'>
                        Home
                        </Link>
                    </li>
                     <li>
                        <Link href={'/allproducts'} className='text-lg hover:text-green-400 transition-colors duration-200'>
                        Shop
                        </Link>
                    </li>
                     <li className='  relative group  cursor-pointer'>

                       
                        <div className='  flex items-center gap-x-2 hover:text-green-400 transition-colors duration-200'>
                            <span className='text-lg  '>Categories</span>
                        <FontAwesomeIcon icon={faChevronDown as IconProp} className='w-2' />
                        </div>
                        <menu className=' shadow-lg absolute min-w-64 top-7 hidden group-hover:block bg-white *:px-3 *:py-2 divide-y-2 *:hover:bg-green-100 *:transition-colors z-50 *:duration-200 divide-gray-300/30 rounded-2xl'>
                            <li><Link href={'/categories'}>All Categories</Link></li>
                            <li><Link href={`/categories/electronics`}>Electronics</Link></li>
                            <li><Link href={'/categories/womensfashion'}>Women's Fashion</Link></li>
                            <li><Link href={'/categories/mensfashion'}>Men's Fashion</Link></li>
                            <li><Link href={'/categories/beauty'}>Beauty & Health</Link></li>
                            
                        </menu>
                       
                    </li>
                     <li>
                        <Link href={'/brands'} className='text-lg hover:text-green-400 transition-colors duration-200'>
                        Brands
                        </Link>
                    </li>
                     <li className='border-r border-gray-300 px-2 '>
                        <Link href={'/contact'} className='flex items-center gap-x-2 '>
                        <div className='w-9 h-9 bg-green-100  rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faHeadphones as IconProp} className='w-3 text-green-400' />
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>support</p>
                            <p className='text-sm'>24/7 Help</p>
                        </div>
                        </Link>
                    </li>
                     <li className='w-9 h-9 relative hover:bg-gray-100 hover:text-green-400 transition-colors duration-200  rounded-full flex items-center justify-center'>
                        <Link href={'/wishlist'} className='text-lg '>
                        <FontAwesomeIcon icon={faHeart as IconProp} className='w-5' />
                        </Link>
                       {count<1?'': <div className='w-5 h-5  flex items-center justify-center bg-red-600 absolute rounded-full -top-3 -right-2 '>
                            <span className='text-white text-xs'>{count}+</span>

                        </div>}
                    </li>
                    <li className=' relative hover:text-green-400 transition-colors duration-200 w-9 h-9 hover:bg-gray-100  rounded-full flex items-center justify-center'>
                        <Link href={'/cart'}>
                        <FontAwesomeIcon icon={faCartShopping as IconProp} className='w-5' />
                        <div className='w-5 h-5 flex items-center justify-center bg-green-600 absolute rounded-full -top-3 -right-2 '>
                            <span className='text-white'>{numOfCartItems}</span>

                        </div>
                        </Link>
                    </li>
                    {isloggedin?<>
                    <div className=''>
                        <li onClick={()=>{
                            setuserinfoopened(!userinfoopened)
                        }} className='cursor-pointer hover:bg-gray-400/20 transition-colors group duration-200 w-12 h-12 rounded-full flex items-center justify-center'>
                        <button className=' cursor-pointer  flex items-center gap-x-3 group-hover:text-green-600 transition-colors   duration-200'>
                              
                       <FontAwesomeIcon icon={faCircleUser as IconProp} className='text-xl' />
                        
                        </button>
                    </li>
                    <div className={`shadow-xl rounded-2xl absolute right-5 z-50 bg-white ${userinfoopened?'block':'hidden'}    `}>
                        <div className="header p-5 border-b border-gray-400/20 flex items-center gap-x-5 ">
                             <li className=' bg-green-200  transition-colors  duration-200 w-12 h-12 rounded-full flex items-center justify-center'>
                        <h1 className='   flex items-center gap-x-3 text-green-600 transition-colors   duration-200'>
                              
                       <FontAwesomeIcon icon={faCircleUser as IconProp} className='text-xl' />
                       
                        
                        </h1>

                    </li>
                    <span>Yousif Adel</span>
                        </div>
                        <div className="links   ">
                            <Link onClick={()=>{setuserinfoopened(false)}} href={'/profile'}>
                                 <div className='hover:bg-green-200/40 transition-colors duration-200  space-x-3 py-1 px-3'>
                                    <FontAwesomeIcon icon={faUser as IconProp}/>
                                    <span>my Profile</span>
                            
                               
                        
                        
                                </div>
                                
                                </Link>
                                 <Link onClick={()=>{setuserinfoopened(false)}} href={'/allorders'}>
                                 <div className='hover:bg-green-200/40 transition-colors duration-200  space-x-3 py-1 px-3'>
                                    <FontAwesomeIcon icon={faBoxOpen as IconProp} />
                                    <span>my Orders</span>
                            
                               
                        
                        
                                </div>
                                
                                </Link>
                                 <Link onClick={()=>{setuserinfoopened(false)}} href={'/wishlist'}>
                                 <div className='hover:bg-green-200/40 transition-colors duration-200  space-x-3 py-2 px-3'>
                                    <FontAwesomeIcon icon={faHeart as IconProp} />
                                    <span>my Wishlist</span>
                            
                               
                        
                        
                                </div>
                                
                                </Link>
                                 <Link onClick={()=>{setuserinfoopened(false)}} href={'/profile'}>
                                 <div className='hover:bg-green-200/40 transition-colors duration-200  space-x-3 py-2 px-3'>
                                    <FontAwesomeIcon icon={faAddressBook as IconProp} />
                                    <span>Addresses</span>
                            
                               
                        
                        
                                </div>
                                
                                </Link>
                                <Link onClick={()=>{setuserinfoopened(false)}} href={'/profile'}>
                                 <div className='hover:bg-green-200/40 transition-colors duration-200  space-x-3 py-2 px-3'>
                                    <FontAwesomeIcon icon={faGear as IconProp} />
                                    <span>Settings</span>
                            
                               
                        
                        
                                </div>
                                
                                </Link>
                                <Link onClick={()=>{setuserinfoopened(false)}} href={'/profile'}>
                                 <div className='hover:bg-red-200/40 transition-colors duration-200  space-x-3 py-2 px-3'>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket as IconProp} className='text-red-500' />
                                    <span className='text-red-500'>sign out</span>
                            
                               
                        
                        
                                </div>
                                
                                </Link>
                            
                               
                            
                        </div>

                    </div>
                    </div>
                    
                    
                    </>:<>
                    <li>
                        <button className='bg-green-600 btn  hover:bg-green-700 transition-colors duration-200'>
                            <Link href={'/login'} className='flex items-center gap-x-3 text-white'>
                        <FontAwesomeIcon icon={faUser as IconProp} className='w-4' />
                        <span>Sign in</span>
                        </Link>
                        </button>
                    </li>
                    </>}
                </ul>
                <div className='w-9 h-9 xl:hidden bg-green-600 flex items-center justify-center rounded-full p-2 cursor-pointer ' onClick={toggle}>
                    <FontAwesomeIcon icon={faBars as IconProp} className='w-4 text-white' />
                </div>


            </div>
        </div>
        {menuisopen?<><div className="background  bg-gray-200/50 z-30 inset-0 fixed" onClick={toggle}></div>
        <div className="offcanvas animate-slide-in z-40  bg-white shadow fixed right-0 bottom-0 top-0 px-3 py-2 space-y-5">
            <div className='flex items-center justify-between gap-x-10 '>
                <Image src={logo} alt="fresh cart logo" />
                <div className='w-9 h-9 rounded-full flex items-center justify-center bg-gray-100/50 cursor-pointer' onClick={toggle}>
                    <FontAwesomeIcon icon={faXmark as IconProp} className='w-3' />
                </div>
            </div>
            <search className=' relative'>
                    <input type="text" className='form-control rounded-xl  min-w-70 placeholder:text-sm placeholder:text-gray-500' placeholder='search products' />
                    <div className='bg-green-600 hover:bg-green-700 transition-colors duration-200 w-9 h-9 absolute right-9  rounded-full   top-1/2 -translate-y-1/2 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} className='w-3 text-white ' />
                    </div>

                </search>
                <ul>
                     <li className=''>
                        <Link href={'/'} className='text-lg hover:bg-green-100/40 w-full inline-block py-3 px-4 hover:text-green-700  transition-colors duration-200'>
                        Home
                        </Link>
                    </li>
                     <li>
                        <Link href={'/allproducts'} className='text-lg  hover:bg-green-100/40 w-full inline-block py-3 px-4 hover:text-green-700  transition-colors duration-200'>
                       Shop
                        </Link>
                    </li>
                     <li>
                        <Link href={'/categories'} className='text-lg  hover:bg-green-100/40 w-full inline-block py-3 px-4 hover:text-green-700  transition-colors duration-200'>
                        Categories
                        </Link>
                    </li>
                     <li>
                        <Link href={'/brands'} className='text-lg  hover:bg-green-100/40 w-full inline-block py-3 px-4 hover:text-green-700  transition-colors duration-200'>
                        Brands
                        </Link>
                    </li>
                </ul>
                <ul className='space-y-3'>
                     <li className=' '>
                        <Link href={'/wishlist'} className='text-lg   transition-colors flex items-center duration-200 py-3 px-2   hover:bg-green-100/40    '>
                        <div className='w-9 h-9 rounded-full flex justify-center items-center bg-red-100/30'>
                            <FontAwesomeIcon icon={faHeart as IconProp} className='w-5 text-red-400' />
                        </div>
                        <span>Wishlist</span>
                        </Link>
                    </li>
                    <li className='  '>
                        <Link href={'/cart'} className='flex items-center transition-colors duration-200  px-2 py-3 hover:bg-green-100/40'>
                       <div className='w-9 h-9 rounded-full flex justify-center items-center bg-green-100/30'>
                         <FontAwesomeIcon icon={faCartShopping as IconProp} className='w-5 text-green-400' />
                       </div>
                        <span>Cart</span>
                        </Link>
                    </li>
                </ul>
                {isloggedin?<>
                <div className="buttons flex gap-x-4">
                    <button  className='btn bg-green-600 px-12 py-4 text-white hover:bg-green-700 transition-colors duration-200'>Logout</button>
                   
                </div></>:<div className="buttons flex gap-x-4">
                    <button className='btn bg-green-600 px-12 py-4 text-white hover:bg-green-700 transition-colors duration-200'>Sign in</button>
                    <button className='btn bg-white border border-green-500 px-12 py-4 text-green-500 hover:bg-green-100/60 transition-colors duration-200'>Sign up</button>
                </div>}
                <div className='border-r border-gray-300 px-2  py-3 hover:bg-green-100/40 transition-colors duration-200 '>
                        <Link href={'/contact'} className='flex items-center gap-x-2 '>
                        <div className='w-9 h-9 bg-green-100  rounded-full flex items-center justify-center'>
                            <FontAwesomeIcon icon={faHeadphones as IconProp} className='w-3 text-green-400' />
                        </div>
                        <div>
                            <p className='text-sm text-black'>Need Help?</p>
                            <p className='text-sm text-green-700'>Contact Support</p>
                        </div>
                        </Link>
                    </div>
        </div>
</>:''}
        
    </header>
    </>
  
}
