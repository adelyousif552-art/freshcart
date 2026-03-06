import Loginform from "../components/Loginform";
import Loginhero from "../components/Loginhero";

export default function Loginscreen(){
    return <>
    <div className="grid md:grid-cols-2 max-w-7xl mx-auto my-15 space-x-3">
        <Loginhero/>
        <Loginform/>
    </div>
    
    </>
}