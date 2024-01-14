import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

const Post = forwardRef(({
    avatar,
    displayName, 
    username, 
    verified, 
    text, 
    image
    }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post-avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>
                            {displayName} {" "} 
                            <span className="post-username">{verified && <VerifiedIcon className="post-badge"/>}@{username}</span>
                        </h3>
                    </div>
                    <div className="post-headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post-footer">
                    <div className="post-interactions">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <BarChartIcon fontSize="small" />
                    </div>
                    <div className="post-share">
                        <BookmarkBorderIcon fontSize="small" />
                        <IosShareIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Post;