import React, { useState, useEffect} from 'react';
import "./Feed.css";
import Post from './Post';
import RukBox from "./RukBox"
import db from "./firebase";


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            {/*Header*/}
            <div className="feed__header"><h2>Home</h2></div>

            {/*RukBox*/}
            <RukBox />

            {/*Post*/}
            {posts.map(post => (
                <Post displayName={post.displayName} 
                username={post.username} 
                verified={post.verified} 
                text={post.text} 
                avatar={post.avatar} 
                image={post.image}
                />
            ))}
            <Post />
            <Post />
            <Post />
            {/*Post*/}
            {/*Post*/}
        </div>
    )
}

export default Feed
