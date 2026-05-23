import { Navigate, useLocation } from "react-router-dom";

import  { type JSX } from 'react'


export default function ProtectedRoute({children}:{children: JSX.Element}) {
const authenticated=!!localStorage.getItem("authToken");
const {pathname} = useLocation()
if (authenticated){
    return <>{children}</>

}else{
    return <Navigate to='/signin' replace state={{referrer:pathname}} />
}

}
