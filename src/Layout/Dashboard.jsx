// import {  FaEnvelope, FaHome,  FaSearch, } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";

import { Outlet } from "react-router-dom";


// const Dashboard = () => {

//     const [isAdmin] = useAdmin();

//     return (
//         <div className="flex">
//             {/* dashboard side bar */}
//             <div className="w-64 min-h-screen text-white bg-orange-400">
//                 <ul className="menu p-4">
//                     {
//                         isAdmin ? <>
//                             <li>
//                                 <NavLink to="/dashboard/adminHome">
//                                     <FaHome></FaHome>
//                                     Admin Home</NavLink>
//                             </li>
                            
//                         </>
//                             :
//                             <>
//                                 <li>
//                                     <NavLink to="/dashboard/userHome">
//                                         <FaHome></FaHome>
//                                         User Home</NavLink>
//                                 </li>
//                             </>
//                     }
//                     {/* shared nav links */}
//                     <div className="divider"></div>
//                     <li>
//                         <NavLink to="/">
//                             <FaHome></FaHome>
//                             Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/order/salad">
//                             <FaSearch></FaSearch>
//                             Menu</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/order/contact">
//                             <FaEnvelope></FaEnvelope>
//                             Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             {/* dashboard content */}
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;



const Dashboard = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Dashboard;