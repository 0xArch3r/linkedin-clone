import React from 'react';
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title, onClick, selected, user }) {
    return (
        <div onClick={onClick} className={ selected ? 'headerOption__selected' : 'headerOption' } >
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Avatar className="headerOption__icon" src={avatar.photoUrl}>{avatar.email[0]}</ Avatar>}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
