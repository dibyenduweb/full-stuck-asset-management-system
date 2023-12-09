import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";



const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth(); 
    const [isAdmin, isAdminLoading]= useAdmin();
    console.log(isAdmin,isAdminLoading,loading);
    const location = useLocation();

    if(!isAdmin ){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;