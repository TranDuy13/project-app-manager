import { Outlet, Navigate } from "react-router";
import { LoginStatus } from "../hook/checkLoggin";

const PrivateRoute=()=>{
    const {login,checking}=LoginStatus()
    if(checking){
        return(
            <>
            <div></div>
            </>
        )
    }
    return login?<Outlet/> :<Navigate to ='/login'/>
   
}
export default PrivateRoute