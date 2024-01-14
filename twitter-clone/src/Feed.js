import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./Tweetbox";
import Post from "./Post";
import FeedHeader from "./FeedHeader";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed () {
    const [selectedCategory, setSelectedCategory] = useState('following');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (doc.id, doc.data())))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feed-header">
                <FeedHeader 
                active={selectedCategory === 'forYou' ? true: false} 
                onClick={() => setSelectedCategory('forYou')} 
                text="For You" 
                />
                <FeedHeader 
                active={selectedCategory === 'following' ? true: false} 
                onClick={() => setSelectedCategory('following')} 
                text="Following" 
                />
                <SettingsOutlinedIcon />
            </div>

            <TweetBox avatar="https://avatars.githubusercontent.com/u/112971529?v=4" />

            <FlipMove>
            {posts.map((post) => (
                <Post 
                key={post.id}
                avatar={post.avatar} 
                displayName={post.displayName} 
                username={post.username} 
                verified={post.verified} 
                text={post.text} 
                image={post.image} 
                />
            ))}
            </FlipMove>            
            
        </div>
    );
}

export default Feed;