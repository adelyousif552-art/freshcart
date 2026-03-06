import { authreducer, stateinit } from '@/Features/auth/store/auth.slice'
import { cartreducer, cartstate } from '@/Features/cart/store/cartslice'
import { CartProduct } from '@/Features/cart/types/carttypes'
import { wishreducer, wishstate } from '@/Features/wishlist/store/wishlist.slice'
import {configureStore} from '@reduxjs/toolkit'
export type preloadedStatetype={
    auth:stateinit
    cart:cartstate
    wishlist:wishstate
}

export function createstore(preloadedState:preloadedStatetype){
     const store=configureStore({
    reducer:{
        auth:authreducer,
        cart:cartreducer,
        wishlist:wishreducer
        
    },
    preloadedState
})
return store
}
export type appstore=ReturnType<typeof createstore>
export type appstate=ReturnType<appstore['getState']>
export type dispatchtype= appstore['dispatch']