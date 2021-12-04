import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
            alt="LinkedIn Logo"
          />
          <div className="header__search">
            <SearchIcon />
            <input type="text"/>
          </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption 
          avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHS9_733N6TTQ/profile-displayphoto-shrink_100_100/0/1584137033010?e=1643846400&v=beta&t=cXHCBPUzq9m5jqMVICRwO_E1ng4K7RXgr2MkZfU4wTE"
          title="Me" 
        />
      </div>
    </div>
  )
}

export default Header
