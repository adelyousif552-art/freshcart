import { ReactNode } from "react";
import '../styles/globals.css'
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import '@fortawesome/fontawesome-svg-core/styles';
import { config } from "@fortawesome/fontawesome-svg-core";
import {Bounce, ToastContainer} from 'react-toastify'
import Providers from "@/Features/auth/components/providers";
import { verifytoken } from "@/Features/server/cookies";
import { getcartproducts } from "@/Features/cart/server/addproductserver";
import { cartstate } from "@/Features/cart/store/cartslice";
import { wishstate } from "@/Features/wishlist/store/wishlist.slice";
import { get } from "http";
import { getwishlist } from "@/Features/wishlist/server/wishlist.server";

config.autoAddCss=false;
let Cartstate:cartstate={
  CartId:null,
  numOfCartItems:0,
  totalCartPrice:0,
  products:[],
  error:null,
  isLoading:false
}
let Wishstate: wishstate = {
  count: 0,
  products: [],
}

export default async function RootLayout({children}:{children: ReactNode}){
  const response=await verifytoken()
  if(response.isloggedin){
    try {
      const data=await getcartproducts()
      const wishlistproducts=await getwishlist()
      
      Cartstate={
        CartId:data.cartId,
        numOfCartItems:data.numOfCartItems,
        totalCartPrice:data.data.totalCartPrice,
        products:data.data.products,
        isLoading:false,
        error:null
        
      }
      Wishstate={
        count:wishlistproducts.count,
        products:wishlistproducts.data
      }
    } catch (error) {
      
    }
  }
  
  
  return<html lang="en">
    <body>
     <Providers preloadedState={{auth:response,cart:Cartstate,wishlist:Wishstate}}>
       <Navbar/>
      {children}
      <Footer/>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>

     </Providers>

    </body>






    </html>



}