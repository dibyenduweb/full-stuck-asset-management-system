/* eslint-disable no-unused-vars */
// import { Helmet } from "react-helmet-async";
// import Banner from "./Banner";
// import Packages from "./Packages";
// import { useLoaderData } from "react-router-dom";
// import About from "./About";
// import useAuth from "../../../hooks/useAuth";
// const Home = () => {
//   const {user} =useAuth()
//   console.log(user);
//   const packagesData = useLoaderData();
//   console.log(packagesData);

//   return (
//     <>
//     <div>
//       <Helmet>
//         <title>Home</title>
//       </Helmet>
//       <Banner />
//       <div className="lg:flex gap-6 w-[800px] mx-auto my-6">  
//       {
//                 packagesData.map(pack => <Packages key={pack._id} pack={pack}></Packages>)
//             }
//       </div>
//       <About/>
//     </div>
//     </>
//   );
// };

// export default Home;
// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import Banner from "./Banner";
// import Packages from "./Packages";
// import { useLoaderData } from "react-router-dom";
// import About from "./About";
// import useAuth from "../../../hooks/useAuth";

// const Home = () => {
//   const { user } = useAuth();
//   const packagesData = useLoaderData();
//   const [loading, setLoading] = useState(true);
//   const [userRole, setUserRole] = useState(null);


//     useEffect(() => {
//     // Fetch user data from the server
//     fetch('https://asset-management-system-server-lime.vercel.app/users')
//       .then(res => res.json())
//       .then(data => {
//         // Find user with the matching email
//         const userWithMatchingEmail = data.find(userData => userData.email === user?.email);

//         // Set the user role in the state
//         setUserRole(userWithMatchingEmail?.role);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, [user]);

//   return (
//     <>
//       <Helmet>
//         <title>Home</title>
//       </Helmet>
//       {userRole === 'admin' ? (
//         <h1>Welcome Admin!</h1>
//       ) : userRole === 'employee' ? (
//         <h1>Welcome Employee!</h1>
//       ) : (
//         <div>
//           <Banner />
//           <div className="lg:flex gap-6 w-[800px] mx-auto my-6">
//             {packagesData.map(pack => <Packages key={pack._id} pack={pack} />)}
//           </div>
//           <About />
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Packages from "./Packages";
import { Link, useLoaderData } from "react-router-dom";
import About from "./About";
import useAuth from "../../../hooks/useAuth";
import EmHome from "./EmHome/EmHome";
import AdminHome from "../../../Admin/AdminHome";

const Home = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const packagesData = useLoaderData();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    
    setLoading(true);

   
    fetch('https://asset-management-system-server-lime.vercel.app/users')
      .then(res => res.json())
      .then(data => {
       
        const userWithMatchingEmail = data.find(userData => userData.email === user?.email);

        
        setUserRole(userWithMatchingEmail?.role);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false); 
      });
  }, [user]);


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {userRole === 'admin' ? (
        <Link>
        <AdminHome/>
        </Link>
      ) : userRole === 'employee' ? (
       <Link to='emhome'>
        <EmHome/>
       </Link>
      ) : (
        <div>
          <Banner />
          <div className="lg:flex gap-6 w-[800px] mx-auto my-6">
            {packagesData.map(pack => <Packages key={pack._id} pack={pack} />)}
          </div>
          <About />
        </div>
      )}
    </>
  );
};

export default Home;
