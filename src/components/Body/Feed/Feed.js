import React, {useState, useEffect } from 'react'
import './Feed.css';
import InputContainer from './InputContainer';
import Post from './Post';
import { db } from "../../../firebase";
import { query, orderBy, onSnapshot, collection, addDoc, serverTimestamp } from 'firebase/firestore';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");

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
            name: "Anthony Almaguer",
            description: "Technical Account Manager",
            message: input,
            photoUrl: "",
            timestamp: serverTimestamp()
        })
        setInput("")
    }

    return (
        <div className="feed">
            <InputContainer value={input} onChangeFunc={handleInputChange} onSubmit={handleSubmit}/> 
            {posts.map( ({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed
