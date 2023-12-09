/* eslint-disable react-hooks/exhaustive-deps */
// // // /* eslint-disable no-unused-vars */
// import { useContext, useEffect, useState} from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";




// const NavBar = () => {
//     const { user, logOut } = useContext(AuthContext);
    
//     const [adminRol, setAdminRol] = useState([]);

// useEffect(() =>{
//     fetch('https://asset-management-system-server-lime.vercel.app/users')
//     .then(res => res.json())
//     .then(data => setAdminRol(data))


//     const data = adminRol.find((item) => item.email === user?.email);
//     setAdminRol(data);
// },[]);

// console.log("admin admin", adminRol);





//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     }

   

//     const navOptions =
    
    
    
//     <>
//             {
//            user ? <>
//                 {/* <span>{user?.displayName}</span> */}
//                 <li><Link to="/emhome">Home</Link></li>
//                 <li><Link to="/emhome">My Team</Link></li>
//                 <li><Link to="/emhome">My Assets</Link></li>
//                 <li><Link to="/emhome">Requast Asset</Link></li>
//                 <li><Link to="/emhome">Make Custom Request</Link></li>
//                 <li><Link to="/emhome">Profile</Link></li>
//                 <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
//             </> : <>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/signup">Join as Employee</Link></li>
//         <li><Link to="/hrsingup">Join as HR/Admin</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//             </>
//         }

//     </>

//     return (
//         <>
//             <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
//                             {navOptions}
//                         </ul>
//                     </div>
            

                     
//             {
//             user ? <>
//                 <img className="w-60 " src="https://www.vhv.rs/dpng/d/407-4070655_walt-disney-company-logo-png-transparent-png.png" alt="Asset Management e" />
//             </> : <>
//             <img className="w-60 " src="https://i.ibb.co/T4d8HVm/1.png" alt="Asset Management System" />

//             </>
//         }
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navOptions}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default NavBar;



// // // {
// // //     admin ?<>
// // //     <li><Link to="/">Admin Home</Link></li>
// // //         <li><Link to="/">My Team</Link></li>
// // //         <li><Link to="/">My Assets</Link></li>
// // //         <li><Link to="/">Requast Asset</Link></li>
// // //         <li><Link to="/">Make Custom Request</Link></li>
// // //         <li><Link to="/">Profile</Link></li>
    

// // /* eslint-disable no-unused-vars */
// import { useContext, useEffect, useState} from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";




// const NavBar = () => {
//     const { user, logOut } = useContext(AuthContext);
    
//     const [adminRol, setAdminRol] = useState([]);

// useEffect(() =>{
//     fetch('https://asset-management-system-server-lime.vercel.app/users')
//     .then(res => res.json())
//     .then(data => setAdminRol(data))


//     const data = adminRol.find((item) => item.email === user?.email);
//     setAdminRol(data);
// },[]);

// console.log("admin admin", adminRol);

//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     }

   

//     const navOptions =(
//         <>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/signup">Join as Employee</Link></li>
//             <li><Link to="/hrsingup">Join as HR/Admin</Link></li>
//             <li><Link to="/login">Login</Link></li>
//         </>
//     )

//     const hrAdminLinks = (
//         <>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/">My Team</Link></li>
//     <li><Link to="/">My Assets</Link></li>
//     <li><Link to="/">Requast Asset</Link></li>
//     <li><Link to="/">Make Custom Request</Link></li>
//     <li><Link to="/">Profile</Link></li>
    
    
//     <>
//     );
//          const users =(
//             <>
//             <li><Link to="/emhome">Home</Link></li>
//                 <li><Link to="/emhome">My Team</Link></li>
//                 <li><Link to="/emhome">My Assets</Link></li>
//                 <li><Link to="/emhome">Requast Asset</Link></li>
//                 <li><Link to="/emhome">Make Custom Request</Link></li>
//                 <li><Link to="/emhome">Profile</Link></li>
//                 <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            
            
//             </>
//          )

//     </>

//     return (
//         <>
//             <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
//                             {user ?admin.role=== 'Admin'
//                             ?hrAdminLinks:users
//                             :navOptions}
//                         </ul>
//                     </div>
            

                     
//             {
//             user ? <>
//                 <img className="w-60 " src="https://www.vhv.rs/dpng/d/407-4070655_walt-disney-company-logo-png-transparent-png.png" alt="Asset Management e" />
//             </> : <>
//             <img className="w-60 " src="https://i.ibb.co/T4d8HVm/1.png" alt="Asset Management System" />

//             </>
//         }
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                     {user ?admin.role=== 'Admin'
//                             ?hrAdminLinks:users
//                             :navOptions}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default NavBar;

{/* 

     admin ?<>
     <li><Link to="/">Admin Home</Link></li>
         <li><Link to="/">My Team</Link></li>
         <li><Link to="/">My Assets</Link></li>
         <li><Link to="/">Requast Asset</Link></li>
         <li><Link to="/">Make Custom Request</Link></li>
         <li><Link to="/">Profile</Link></li> */}


        //  import { useContext, useEffect, useState } from "react";
        //  import { Link } from "react-router-dom";
        //  import { AuthContext } from "../../../providers/AuthProvider";
         
        //  const NavBar = () => {
        //      const { user, logOut } = useContext(AuthContext);
             
        //      const [adminRole, setAdminRole] = useState(null); // Changed adminRol to adminRole
         
        //      useEffect(() => {
        //          fetch('https://asset-management-system-server-lime.vercel.app/users')
        //              .then(res => res.json())
        //              .then(data => {
        //                  // Assuming that the user's email is unique, find the user by email
        //                  const adminData = data.find(item => item.email === user?.email);

        //                  setAdminRole(adminData?.role); 
        //                  console.log('admin role',data);
        //              });
        //      }, [user]);
         
        //      console.log("admin role", adminRole);
         
        //      const handleLogOut = () => {
        //          logOut()
        //              .then(() => { })
        //              .catch(error => console.log(error));
        //      }
         
        //      const navOptions = (
        //          <>
        //              <li><Link to="/">Home</Link></li>
        //              <li><Link to="/signup">Join as Employee</Link></li>
        //              <li><Link to="/hrsingup">Join as HR/Admin</Link></li>
        //              <li><Link to="/login">Login</Link></li>
        //          </>
        //      );
         
        //      const hrAdminLinks = (
        //          <>
        //              <li><Link to="/">Admin Home</Link></li>
        //              <li><Link to="/">My Team</Link></li>
        //              <li><Link to="/">My Assets</Link></li>
        //              <li><Link to="/">Request Asset</Link></li>
        //              <li><Link to="/">Make Custom Request</Link></li>
        //              <li><Link to="/">Profile</Link></li>
        //              <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
        //          </>
        //      );
         
        //      const userLinks = (
        //          <>
        //              <li><Link to="/emhome">Home</Link></li>
        //              <li><Link to="/emhome">My Team</Link></li>
        //              <li><Link to="/emhome">My Assets</Link></li>
        //              <li><Link to="/emhome">Request Asset</Link></li>
        //              <li><Link to="/emhome">Make Custom Request</Link></li>
        //              <li><Link to="/emhome">Profile</Link></li>
        //              <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
        //          </>
        //      );
         
        //      return (
        //          <>
        //              <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        //                  <div className="navbar-start">
        //                      <div className="dropdown">
        //                          <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                          </label>
        //                          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
        //                              {user ? adminRole === 'admin' ? hrAdminLinks : userLinks : navOptions}
        //                          </ul>
        //                      </div>
                             
        //                      {
        //                          user ? 
        //                              <img className="w-60" src="https://www.vhv.rs/dpng/d/407-4070655_walt-disney-company-logo-png-transparent-png.png" alt="Asset Management e" />
        //                              :
        //                              <img className="w-60" src="https://i.ibb.co/T4d8HVm/1.png" alt="Asset Management System" />
        //                      }
        //                  </div>
        //                  <div className="navbar-center hidden lg:flex">
        //                      <ul className="menu menu-horizontal px-1">
        //                          {user ? adminRole === 'admin' ? hrAdminLinks : userLinks : navOptions}
        //                      </ul>
        //                  </div>
        //              </div>
        //          </>
        //      );
        //  };
         
        //  export default NavBar;



        import { useContext, useEffect, useState } from "react";
        import { Link, useNavigate } from "react-router-dom";
        import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
        
        const NavBar = () => {
            const { user, logOut } = useContext(AuthContext);
            const [adminRole, setAdminRole] = useState();
            const navigate = useNavigate()
            useEffect(() => {
                fetch('https://asset-management-system-server-lime.vercel.app/users')
                    .then(res => res.json())
                    .then(data => {
                        console.log('admin role', data);
            

                        const adminData = data.find(adminRole => adminRole.email === user?. email);

                        console.log(adminData);


                        setAdminRole(adminData?.role); 
                        console.log('admin role', adminData?.role);
                    })
                    .catch(error => {
                        console.error('Error fetching user data:', error);
                    });
            }, [user]);


            console.log("role", adminRole);
        
            //employee
            const handleLogOut = () => {
                logOut()
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Logged Out Succsesfully",
                            showConfirmButton: false,
                            timer: 1500
                          });

                       navigate("/")
                     })
                    .catch(error => console.log(error));
            }
        
            const navOptions  = (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">Join as Employee</Link></li>
                    <li><Link to="/hrsingup">Join as HR/Admin</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </>
            );
        
            const hrAdminLinks = (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/assetlist">Asset List</Link></li>
                    <li><Link to="/addasset">Add an Asset</Link></li>
                    <li><Link to="/allrequests">All Requests List</Link></li>
                    <li><Link to="/addemployee">My Employee List</Link></li>
                    <li><Link to="/employeelist">Add an Employee</Link></li>
                    <li><Link to="/customrequests">Custom Requests</Link></li>
                    <li><Link to="/adminprofile">Profile</Link></li>
                    <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                </>
            );
        
            const userLinks = (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/myasset">My Assets</Link></li>
                    <li><Link to="/myteam">My Team</Link></li>
                    <li><Link to="/requestasset">Request Asset</Link></li>
                    <li><Link to="/makecustomerequest">Make Custom Request</Link></li>
                    <li><Link to="/adminprofile">Profile</Link></li>
                    <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                </>
            );
        
            return (
                <>
                    <div className="navbar  z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                                
                                    {user ? (adminRole === 'admin' ? hrAdminLinks : userLinks) : navOptions}

                                </ul>
                            </div>
        
                            {
                                user ? 
                                    <img className="w-60" src="https://i.ibb.co/gJGTgMP/Business-Logo-1.png" alt="TechHunt" />
                                    :
                                    <img className="w-60" src="https://i.ibb.co/T4d8HVm/1.png" alt="Asset Management System" />
                            }
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {user ? (adminRole === 'admin' ? hrAdminLinks : userLinks) : navOptions}
                            </ul>
                        </div>
                    </div>
                </>
            );
        };
        
        export default NavBar;
        