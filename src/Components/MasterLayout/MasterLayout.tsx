import  { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

export default function MasterLayout() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    
      <div className={`d-flex dashboard  ${isOpen ? 'open' : ''}`}>
        {/*SideBar ال  component  في  import بعدل عليه هنا وعملتله كمان  npm ودي باكتج موجوده جاهزه من موقع  react-pro-sidebar جاهز هنا بجيبه من  sidebar ل  import عملت  */}
        <SideBar  isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className=" wrapper-body">
          <NavBar/>
          <Outlet />
        </div>
        
      </div>
    
  )
}
