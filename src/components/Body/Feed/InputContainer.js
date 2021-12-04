import React from 'react'
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';


function InputContainer({onSubmit, onChangeFunc, value}) {
    

    return (
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={value} onChange={onChangeFunc} type="text"/>
                    <button onClick={onSubmit} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption title="Photo" Icon={ImageIcon} color="#70B5f9" />
                <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#7FC15E" />
            </div>
        </div>
    )
}

export default InputContainer
