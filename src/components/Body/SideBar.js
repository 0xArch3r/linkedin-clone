import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice"

function SideBar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hashtag">
                #
            </span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
          <div className="sidebar__top">
            <img 
                src="https://media.istockphoto.com/photos/cosmic-nebula-and-the-shining-stars-picture-id1183329518?b=1&k=20&m=1183329518&s=170667a&w=0&h=VHUGn9gQm20fkmEldNWxRwZB9qnXoL-WAJNaRpIUacw=" 
                alt=""
             />

            <Avatar
                src={user.photoUrl}
                className="sidebar__avatar"
            >{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>Technical Account Manager | OSCP</h4>
          </div>
          <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,443</p>
            </div>
          </div>

          <div className="sidebar__bottom">
              <p>Recent</p>
              {recentItem('reactJS')}
              {recentItem('programming')}
              {recentItem('offensive security')}
              {recentItem('powershell')}
              {recentItem('powershell')}
          </div>
        </div>
    )
}

export default SideBar
