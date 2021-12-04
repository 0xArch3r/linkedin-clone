import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function SideBar() {

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
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHS9_733N6TTQ/profile-displayphoto-shrink_100_100/0/1584137033010?e=1643846400&v=beta&t=cXHCBPUzq9m5jqMVICRwO_E1ng4K7RXgr2MkZfU4wTE"
                className="sidebar__avatar"
            />
            <h2>Anthony Almaguer</h2>
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
