'use client'
import { Provider } from "react-redux";

import { ReactNode, useRef } from "react";
import { appstore, createstore, preloadedStatetype } from "@/store/store";

type providerchild={
    children:ReactNode
    preloadedState:preloadedStatetype
}

export default function Providers({children,preloadedState}:providerchild){
    const storeref=useRef<null|appstore>(null)
    if(!storeref.current){
        storeref.current=createstore(preloadedState)
    }
    return <>
    <Provider store={storeref.current}>
        {children}

    </Provider>
    </>
}