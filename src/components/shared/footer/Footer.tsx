import { faArrowRotateLeft, faEnvelope, faHeadset, faLocationDot, faPhone, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from '../../../assets/images/freshcart-logo.svg'
import Link from "next/link";


export default function Footer() {
    return <>
        <footer className="">
            <div className="firstfooter lg:flex lg:items-center space-y-5 p-6 lg:justify-between bg-green-100 ">
                <div className="">
                    <div className="flex items-center gap-x-2">
                        <div className="icon w-9 h-9 rounded-lg bg-green-300/40 flex items-center justify-center">
                            <FontAwesomeIcon icon={faTruck} className="text-green-600" />
                        </div>
                        <div className="text">
                            <h4>Free Shipping</h4>
                            <p className="text-gray-400">On orders over 500 EGP</p>
                        </div>
                    </div>

                </div>
                <div className="">
                    <div className="flex items-center gap-x-2">
                        <div className="icon w-9 h-9 rounded-lg bg-green-300/40 flex items-center justify-center">
                            <FontAwesomeIcon icon={faArrowRotateLeft} className="text-green-600" />
                        </div>
                        <div className="text">
                            <h4>Easy Returns</h4>
                            <p className="text-gray-400">14-day return policy</p>
                        </div>
                    </div>

                </div>
                <div className="">
                    <div className="flex items-center gap-x-2">
                        <div className="icon w-9 h-9 rounded-lg bg-green-300/40 flex items-center justify-center">
                            <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" />
                        </div>
                        <div className="text">
                            <h4>Secure Payment</h4>
                            <p className="text-gray-400">100% secure checkout</p>
                        </div>
                    </div>

                </div>
                <div className="">
                    <div className="flex items-center gap-x-2">
                        <div className="icon w-9 h-9 rounded-lg bg-green-300/40 flex items-center justify-center">
                            <FontAwesomeIcon icon={faHeadset} className="text-green-600" />
                        </div>
                        <div className="text">
                            <h4>24/7 Support</h4>
                            <p className="text-gray-400">Contact us anytime</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="lastfooter bg-secondary px-3 py-10  ">
                <div className="grid xl:grid-cols-6 lg:grid-cols-3 space-y-5 sm:grid-cols-1 border-b border-gray-100/30 py-3">
                    <div className="lg:col-span-2 space-y-5">
                        <div className="bg-white rounded-xl w-1/3 p-2 flex items-center justify-center">
                            <Image src={logo} alt='fresh cart logo' />
                        </div>
                        <p className="text-gray-400">FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.</p>
                        <ul className="space-y-3">
                            <li><a href="tel:+1 (800) 123-4567" className='flex  items-center gap-x-3  duration-200'><FontAwesomeIcon icon={faPhone} className='w-5 text-green-600' /><span className="text-gray-400 hover:text-green-600 transition-colors duration-200">+1 (800) 123-4567</span></a></li>
                            <li className=' border-gray-200 hover:text-green-400 transition-colors duration-200'><a href="mailto:support@freshcart.com" className='flex items-center gap-x-3'><FontAwesomeIcon icon={faEnvelope} className='w-5 text-green-600' /> <span className="text-gray-400 hover:text-green-600 transition-colors duration-200">support@freshcart.com</span></a></li>
                            <li className="flex items-center gap-x-3"><FontAwesomeIcon icon={faLocationDot} className="text-green-600" />
                            <p className="text-gray-400">123 Commerce Street, New York, NY 10001</p>
                            
                            </li>
                        </ul>
                        <ul className="flex items-center gap-x-3">
                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary2">
                                <FontAwesomeIcon icon={faFacebookF} className="text-gray-400" />
                            </div>
                             <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary2">
                                <FontAwesomeIcon icon={faTwitter} className="text-gray-400" />
                            </div>
                             <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary2">
                                <FontAwesomeIcon icon={faInstagram} className="text-gray-400" />
                            </div>
                             <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary2">
                                <FontAwesomeIcon icon={faYoutube} className="text-gray-400" />
                            </div>
                        </ul>


                    </div>
                    <div className="shop space-y-2">
                        <h1 className="text-white font-bold">Shop</h1>
                        <ul className="space-y-4">
                            <li><Link href={'/allproducts'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">All Products</Link></li>
                            <li><Link href={'/categories'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Categories</Link></li>
                            <li><Link href={'/brands'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Brands</Link></li>
                            <li><Link href={'/electronics'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Electronics</Link></li>
                            <li><Link href={'menfashion'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Men's Fashion</Link></li>
                            <li><Link href={'/womenfashion'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Women's Fashion</Link></li>
                        </ul>

                    </div>
                    <div className="account space-y-2">
                        <h1 className="text-white font-bold">Account</h1>
                            <ul className="space-y-4">
                            <li><Link href={'/account'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">My Account</Link></li>
                            <li><Link href={'/order'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Order History</Link></li>
                            <li><Link href={'/wishlist'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Wishlist</Link></li>
                            <li><Link href={'/login'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Sign In</Link></li>
                            <li><Link href={'/signup'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Create Account</Link></li>
                           
                        </ul>

                    </div>
                     <div className="account space-y-2">
                        <h1 className="text-white font-bold">Support</h1>
                            <ul className="space-y-4">
                            <li><Link href={'/contact'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Contact Us</Link></li>
                            <li><Link href={'/help'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Help Center</Link></li>
                            <li><Link href={'/shippinginfo'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Shipping Info</Link></li>
                            <li><Link href={'/refunds'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Returns & Refunds</Link></li>
                            <li><Link href={'/order'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Track Order</Link></li>
                           
                        </ul>

                    </div>
                     <div className="account space-y-2">
                        <h1 className="text-white font-bold">Legal</h1>
                            <ul className="space-y-4">
                            <li><Link href={'/account'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Privacy Policy</Link></li>
                            <li><Link href={'/order'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Terms of Service</Link></li>
                            <li><Link href={'/wishlist'} className="text-gray-400 hover:text-green-600 transition-colors duration-200">Cookie Policy</Link></li>
                           
                           
                        </ul>

                    </div>

                </div>
                <div className="mt-5">
                    <p className="text-gray-400">© {new Date().getFullYear()} FreshCart. All rights reserved.</p>
                </div>


            </div>
        </footer>




    </>
}
