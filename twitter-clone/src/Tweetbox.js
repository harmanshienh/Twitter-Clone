import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import db from "./firebase";

function TweetBox({avatar}) {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Harman Shienh",
            username: "harmanshienh",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars.githubusercontent.com/u/112971529?v=4"
        });

        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox-input">
                    <Avatar className="tweetBox-avatar" src={avatar} />
                    <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} type="text" placeholder="What is happening?!" />
                </div>
                <div className="tweetBox-extra">
                    <div className="tweetBox-media">
                        <InsertPhotoOutlinedIcon />
                        <GifBoxOutlinedIcon />
                        <BallotOutlinedIcon />
                        <SentimentSatisfiedOutlinedIcon />
                        <EditCalendarOutlinedIcon />
                        <PlaceOutlinedIcon />
                    </div>
                    <Button onClick={sendTweet} type="submit" className="tweetBox-button">Post</Button>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;