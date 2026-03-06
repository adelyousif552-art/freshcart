
import { deletetoken } from "@/Features/server/cookies";
import { useDispatch } from "react-redux";
import { authactions } from "../store/auth.slice";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default  function useLogout(){
    
    const Router=useRouter()
    const dispatch=useDispatch()
   const logout=async ()=>{
    await deletetoken()
     dispatch(authactions.setloggedinfo({isloggedin:false,userinfo:null}))
    Router.push('/login')
    Router.refresh()
    
   }
   return {logout}

}