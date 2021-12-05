import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../features/userSlice"
import { auth } from "../../firebase"
import { signOut } from 'firebase/auth'

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    signOut(auth).then(() => {
      console.log("Signed Out")
    }).catch((err) => {
      console.log("Error Signing Out: " + err.message)
    })
  }
  
  const onClick = () => {
    console.log("logout")
  }
  return (
    <div className='header'>
      <div className="header__left">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
            alt="LinkedIn Logo"
          />
          <div className="header__search">
            <SearchIcon />
            <input placeholder="Search" type="text"/>
          </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} selected/>
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        { user ?
          <HeaderOption 
            avatar={user}
            title="Me"
            onClick={logoutOfApp} 
          />
          : ""}
        
      </div>
    </div>
  )
}

export default Header
