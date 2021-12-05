import React, {useState, useEffect } from 'react'
import './Feed.css';
import FlipMove from "react-flip-move";
import InputContainer from './InputContainer';
import Post from './Post';
import { db } from "../../../firebase.js";
import { query, orderBy, onSnapshot, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
 
function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    const user = useSelector(selectUser);

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        const postsQry = query(collection(db,"posts"), orderBy("timestamp", "desc"));
        onSnapshot(postsQry, (snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "posts"), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timestamp: serverTimestamp()
        })
        setInput("")
    }

    return (
        <div className="feed">
            <InputContainer value={input} onChangeFunc={handleInputChange} onSubmit={handleSubmit}/>

            <FlipMove>
            {posts.map( ({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed
