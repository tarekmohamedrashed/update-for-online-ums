// import React, { useContext, useState } from 'react'
// import { CgProfile } from 'react-icons/cg';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaUsers } from 'react-icons/fa';
// import { IoHome } from 'react-icons/io5';
// import { TbLogout2 } from 'react-icons/tb';
// import { TiUserAdd } from 'react-icons/ti';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { Link, useNavigate } from 'react-router-dom';
// import myImage from '../../assets/images/myImage.jpg'
// import { AuthContext } from '../Context/AuthContext';

// export default function SideBar({isOpen, setIsOpen}) {
//   // SideBarهعرض البيانات اللي انا عايزها في ال 
//   let {userData}=useContext(AuthContext)
//   //true بتاعها عشان لما اجي اغير فيه يكون ب  default وده ال  false يتقفل فا اديته  icon  مفتوح عشان لما ادوس علي ال sidebar يكون ال  viwo وبالتالي انا عايز اول ما ادخل علي ال  boolean طيب هيا باخد نوع الداتا بتاعتها  sidebar عشان اقدر اقفل وافتح ال  viwo لاني كده هيحصل تغير في ال  useState لازم اعمل  collapsed عشان اعمل 
//   let [collapsed,setIsCollapsed]=useState(false)
//   // collapsed خلهولي  collapsed ولو هو مش  collapsed يبقي خلهولي مش  collapsed تغيرلي في ان لو هو  function  هعمل هنا 
//   let toggleCollapsed=()=>{
//         //مفتوح او مقفول sidebar يعني ديما هيبقي عكس الحاله اللي هو عليها اذا كان ال  false يبقي  not true  ولو ب  not هتخليه زي ما هو ب  true لو ب  collapsed يعني ال not is collapsed هتخليه ب  collapsed اللي بتعدلي علي ال  function كده انا بقوله ان ال  (! collapsed)دي
//     setIsCollapsed(! collapsed);
//     setIsOpen(!isOpen)
//   }
//   // logout في حالة ال  loginاللي هتروح لل navigate اقوله ان ال  let logout اللي هيا دي logoutبتاعت ال  function  في ال  navigate عشان لما احط ال  logout بتاع ال  navigate هنا بهندل ال 
//   let navigate=useNavigate()
//   //loginاللي داخل بيها فابالتالي هيخرج من الويب سايت وهيرجع ل صفحة ال  user عشان يمسح الداتا بتاعت ال  localStorage اللي جوا ال  userToken من الصفحه احزفلي ال  logout كده بقوله في حالة ال 
//   let logout=()=>{
//     localStorage.removeItem("userToken")
//     navigate("/login")
//   }

//   return (
//     // جاهز من الموقع ده علي حسب اللي انا عايزه  component وبختار  npm  من موقع  react pro sidebar الجاهز ده من موقع  Sidebar انا جبت ال 
//     <div className='sidebarContainer '>
//       {/*sidebar يتقفل او يتفتح وبحط ليه ايكون من خلالها بقدر افتح واقفل ال  sidebar عشان لو عايز اعمل ان ال collapsed وبتاخد  react pro sidebar دي بجبها من  collapsed={} */}
//       <Sidebar
//         collapsed={collapsed}
//         backgroundColor='transparent'
//       >
//           {/* مفتوحه خليلي الايكون متجها الي الشمال collapsed يعني مقفول خليلي الايكون متجها الي اليمين ولو ال  collapsed ب  sidebar دي اول كود بقوله لو ال functionعشان اقولها لما اضغط علي ال ايكون نفذلي ال toggleCollapsed اللي اسمها  collapsed بتاعت ال  function ولازم اربطها بال sidebar اللي من خلالها بقدر افتح او اقفل ال icon دي ال */}
//           {collapsed?<FaArrowAltCircleRight onClick={toggleCollapsed} className='mx-3' size={20} />:
//           <FaArrowAltCircleLeft onClick={toggleCollapsed} className='mx-3' size={20}/>}
          
//         <div className='text-center my-5'>
//               {/*userData كده انا هعرض برضوا الصوره دينمك من ال  */}
//           <img src={userData?.image} className='rounded-circle my-3 mx-auto' alt="profile" />
//           {/* lastNameوال firstNameكده انا هعرض ال  */}
//           <h6 >{userData?.firstName} {userData?.lastName} </h6>
//           <h6 className='text-warning'>Admin</h6>
//         </div>
//         <Menu>
//           {/*  عشان اقدر استخدم الايكونس npm بجبها من موقع  terminal في ال  reacticons لل  instoll في المكان اللي انا عايز فيه الايكون وبعمل  import وبعملها  react icons بجيب الايكون الجاهز دي من موقع اسمه  */}
//           <MenuItem icon={<IoHome/>} component={<Link to="/dashboard/home" />}> Home</MenuItem>
//           <MenuItem icon={<FaUsers/>} component={<Link to="/dashboard/userslist" />}> UsersList</MenuItem>
//           <MenuItem icon={<TiUserAdd/>} component={<Link to="/dashboard/adduser" />}> AddUser</MenuItem>
//           <MenuItem icon={<CgProfile/>} component={<Link to="/dashboard/profile" />}> Profile</MenuItem>
//           {/*عشان لما اضغط عليها تخرج من الصفحه logout بتاعت ال  function هسقط هنا ال  */}
//           <MenuItem  style={{marginTop:"93px"}} icon={<TbLogout2/>} onClick={logout} > Logout</MenuItem>
//         </Menu>
//       </Sidebar>
//     </div>
//   )
// }


//type scrept الكود اللي تحت هو كود ال 

import React, { useContext, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaUsers } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { TbLogout2 } from 'react-icons/tb';
import { TiUserAdd } from 'react-icons/ti';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import myImage from '../../assets/images/myImage.jpg';
import { AuthContext } from '../Context/AuthContext';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  const { userData } = useContext(AuthContext);
  const [collapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setIsCollapsed(!collapsed);
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className='sidebarContainer'>
      <Sidebar collapsed={collapsed} backgroundColor='transparent'>
        {collapsed ? (
          <FaArrowAltCircleRight onClick={toggleCollapsed} className='mx-3' size={20} />
        ) : (
          <FaArrowAltCircleLeft onClick={toggleCollapsed} className='mx-3' size={20} />
        )}

        <div className='text-center my-5'>
          <img
            src={userData?.image || myImage}
            className='rounded-circle my-3 mx-auto'
            alt="profile"
          />
          <h6>{userData?.firstName} {userData?.lastName}</h6>
          <h6 className='text-warning'>Admin</h6>
        </div>

        <Menu>
          <MenuItem icon={<IoHome />} component={<Link to="/dashboard/home" />}>Home</MenuItem>
          <MenuItem icon={<FaUsers />} component={<Link to="/dashboard/userslist" />}>UsersList</MenuItem>
          <MenuItem icon={<TiUserAdd />} component={<Link to="/dashboard/adduser" />}>AddUser</MenuItem>
          <MenuItem icon={<CgProfile />} component={<Link to="/dashboard/profile" />}>Profile</MenuItem>
          <MenuItem style={{ marginTop: "93px" }} icon={<TbLogout2 />} onClick={logout}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
