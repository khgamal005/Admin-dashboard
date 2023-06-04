import { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Header.css";

import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import {FaBars} from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const { DarkTheme, setDarkTheme,changeTheme } = useContext(ThemeContext);
  const [show ,setShow]=useState(false)

  const mobile=window.innerWidth<=768?true:false
  useEffect(()=>{
    if(mobile){
      setShow(true)
    }
    else{
      setShow(false)
    }

  },[mobile])


  return (
<>

{(show===false && mobile===true)?<div> <FaBars onClick={()=>setShow(true)}/> </div>:
 <header  className={`icons ${DarkTheme && "dark"}`}>
 <div className="search-bar">
   <input type="text" placeholder="search..." />
   <BiSearch className="icon" />
 </div>

 <div className="tools">
   <AiOutlineUser className="icon" />
   <TbMessages className="icon" />
   <IoAnalytics className="icon" />

   <div className="divider"></div>

   {/* <HiOutlineMoon className="icon" onClick={changeTheme} /> */}
   <RiSettingsLine className="icon" />
   {/* <HiOutlineLogout className="icon" /> */}

   <div className="divider"></div>

   <div className="user">
     <img
       src="https://images.unsplash.com/photo-1669170023257-4da4bc7adfbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
       alt=""
       className="profile-img"
     />
   </div>
 </div>
</header>

}
</>
   
  )}

export default Header;
