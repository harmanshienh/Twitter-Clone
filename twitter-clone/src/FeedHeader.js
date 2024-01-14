import React from "react";
import "./FeedHeader.css"

function FeedHeader({active, text, onClick}) {
    return (
        <div onClick={onClick} className={`feedHeader ${active && 'feedHeader--active'}`}>
            <h2>{text}</h2>
        </div>
    );
}

export default FeedHeader;