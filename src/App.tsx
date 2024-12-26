// import { useState } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './Components/AuthLayout/AuthLayout';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import MasterLayout from './Components/MasterLayout/MasterLayout';
import Home from './Components/Home/Home';
import UsersList from './Components/UsersList/UsersList';
import AddUser from './Components/AddUser/AddUser';
import Profile from './Components/Profile/Profile';
// بتقوله ان  عملية دخوله صح او فيها مشكله user عشان اظهر رساله لل  react-toastify دول لل import  اخر اتنين لل
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  // const [count, setCount] = useState(0)
  let routes=createBrowserRouter([{
    //   Layout  عشان عندي اتنين  object عملت اتنين 
    // ----
   path:"/",
   element:<AuthLayout/>,
  //  NotFound ولو خل خطأ اعرضلي ال AuthLayout كده بقوله لو انت لسه داخل اول مره اعرضلي ال
   errorElement:<NotFound/>,
   children:[
    // browser اللي هيتعرضوا علي ال  AuthLayout دول ولاد ال
    {index:true,element:<Login/>},
    {path:"login",element:<Login/>},
   ]
  } ,{
    //  MasterLayout فوق كده سعتها اعرضلي ال url اللي هو ال path علي الويب سايت في ال  dashboard كده بقوله لو انت لسه داخل علي الصفحه وظهرلك كلمة 
    path:"dashboard",
    element:<MasterLayout/>,
    errorElement:<NotFound/>,
    children:[
      //   MasterLayout بتوع ال  children ودول ال 
     {index:true,element:<Home/>},
     {path:"home",element:<Home/>},
     {path:"userslist",element:<UsersList/>},
     {path:"adduser",element:<AddUser/>},
     {path:"updateuser",element:<AddUser/>},
     {path:"profile",element:<Profile/>},
    //  {path:"home",element:<Home/>},
    ]

  }])

  return (
    <>
    {/* react-toastify لل  <ToastContainer /> دي   */}
    <ToastContainer />
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
