import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import HrSignUp from "../pages/HR/HrSignUp";
import Myasset from "../pages/Home/Home/EmHome/Myasset";
import MyTeam from "../pages/Home/Home/EmHome/MyTeam";
import MakeCustomeRequest from "../pages/Home/Home/EmHome/MakeCustomeRequest";
import PrivateRoute from "./PrivateRoute";

import AddAsset from "../Admin/AddAsset";
import AssetList from "../Admin/AssetList";
import EmployeeList from "../Admin/EmployeeList";
import AssetUpdate from "../Admin/AssetUpdate";
import RequestAsset from "../pages/Home/Home/EmHome/RequestAsset";
import AllRequests from "../Admin/AllRequests";
import AdminProfile from "../Admin/AdminProfile";
import UserProfile from "../pages/Home/Home/EmHome/UserProfile";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import CustomRequests from "../Admin/CustomRequests";
import EmHome from "../pages/Home/Home/EmHome/EmHome";
import Payment from "../pages/Home/Home/EmHome/Payment";
import AddEmploye from "../Admin/AddEmploye";
import AdminHome from "../Admin/AdminHome";
import ErrorPage from "../Errro Page/Error";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://asset-management-system-server-lime.vercel.app/packsge'),
        }, 
        {
          path:'emhome',
          element:<EmHome/>,
        },
        {
          path:'/myasset',
          element:<Myasset/>,
          loader:() => fetch('https://asset-management-system-server-lime.vercel.app/request')
        },
        {
          path:'/myteam',
          element:<MyTeam/>
        },
        {
          path:"/requestasset",
          element:<RequestAsset/>,
        },
        {
          path:'/makecustomerequest',
          element:<MakeCustomeRequest/>
        },
        {
          path:'userProfile',
          element:<UserProfile/>
        },
        {
          path: 'profileUpdate/:id',
          element: <UpdateProfile/>,
          loader: async ({ params }) => {
            const response = await fetch(`https://asset-management-system-server-lime.vercel.app/users/${params.id}`);
            const data = await response.json();
            return data;
          },
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/hrsingup',
          element:<HrSignUp/>
        }
        
      ]
    },

    //admin rautes
    {
      path:'/',
      element: <Main></Main>,
      errorElement:<ErrorPage/>,
      children:[

        {
        path:'adminhome',
        element:<PrivateRoute><AdminHome/></PrivateRoute>,
        loader:() => fetch('https://asset-management-system-server-lime.vercel.app/request')
        },

        {
          path:'/addasset',
          element:<PrivateRoute><AddAsset/></PrivateRoute>
        },
        {
          path: "/assetupdate/:id",
          element: <AssetUpdate />,
          loader: async ({ params }) => {
            const response = await fetch(`https://asset-management-system-server-lime.vercel.app/assetdata/${params.id}`);
            const data = await response.json();
            return data;
          },
          
        },
        {
            path:"allrequests",
            element:<AllRequests/>,
            loader:() => fetch('https://asset-management-system-server-lime.vercel.app/request')
        },
        
        {
          path:'/assetlist',
          element:<PrivateRoute><AssetList/></PrivateRoute>,
        loader:() => fetch('https://asset-management-system-server-lime.vercel.app/assetdata')
        },
        {
          path:'/customrequests',
          element:<CustomRequests/>
        },
        {
          path:'payment',
          element:<PrivateRoute><Payment/></PrivateRoute>,
        },
        {
          path:'/employeelist',
          element:<EmployeeList/>,
          loader:() => fetch('https://asset-management-system-server-lime.vercel.app/users')
        },
        {
          // add emloe as employe list
          path:"/addemployee",
          element:<PrivateRoute><AddEmploye/></PrivateRoute>,
          loader:() => fetch('https://asset-management-system-server-lime.vercel.app/adduser')
        },
        {
          path:"adminprofile",
          element:<PrivateRoute><AdminProfile/></PrivateRoute>,
          //loader:() => fetch('https://asset-management-system-server-lime.vercel.app/users')
        }
      ]
    }
  ]);
