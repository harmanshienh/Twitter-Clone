import React from "react";
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchIcon" />
                <input className="widgets-search" type="text" placeholder="Search" />
            </div>
            <div className="widgets-container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1739689007834157121"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="Drake" options={{height: 400}} />
                <TwitterShareButton options={{text: "This is from the Twitter Clone - Check out my GitHub profile below!"}} url={"https://github.com/harmanshienh"} />
            </div>
        </div>
    );
}

export default Widgets;