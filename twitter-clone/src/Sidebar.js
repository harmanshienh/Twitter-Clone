import React, { useState } from "react";
import "./Sidebar.css";
import { FaXTwitter } from "react-icons/fa6";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar, Button } from '@mui/material';
import { ChromePicker } from 'react-color';

import SidebarOption from "./SidebarOption";

function Sidebar({avatar, displayName, username, verified}) {
    var neutral = true;
    var grayScaleValue;
    var twitterColour;
    var twitterButtonHoverColour;
    var twitterSmallButtonBGColour;
    var twitterBGColour = "#eff3f4";
    var twitterWidgetBGColour;
    var twitterSecondaryTextColour;
    var twitterSubheadingColour;
    var twitterBorderColour;

    const [selectedCategory, setSelectedCategory] = useState('home');

    const [colour, setColour] = useState('#ffffff');
    const [show, setShow] = useState(false);
    function shadeColour(colour, percent) {

        var R = parseInt(colour.toString().substring(1,3),16);
        var G = parseInt(colour.toString().substring(3,5),16);
        var B = parseInt(colour.toString().substring(5,7),16);
    
        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);
    
        R = (R<255)?R:255;  
        G = (G<255)?G:255;  
        B = (B<255)?B:255;  

        R = (R>0)?R:0;  
        G = (G>0)?G:0;  
        B = (B>0)?B:0;  
    
        R = Math.round(R);
        G = Math.round(G);
        B = Math.round(B);
    
        var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));
    
        return "#"+RR+GG+BB;
    }

    function getGrayScaleValue(colour) {
        var R = parseInt(colour.toString().substring(1,3),16);
        var G = parseInt(colour.toString().substring(3,5),16);
        var B = parseInt(colour.toString().substring(5,7),16);

        var grayScale = (R + G + B)/3;
    
        return grayScale;
    }

    function grayScaleToHex(grayScaleValue) {
        if (grayScaleValue > 50 && grayScaleValue < 128) {
            grayScaleValue = parseInt(Math.round(grayScaleValue).toString(), 16);
        }
        else if (grayScaleValue <= 50) {
            grayScaleValue = 50;
        }
        else if (grayScaleValue >= 128) {
            grayScaleValue = 128;
        }
        var RR = ((grayScaleValue.length===1)?"0"+grayScaleValue.toString(16):grayScaleValue.toString(16));
        return "#" + RR + RR + RR;
    }

    function blendColours(colour, percent) {
        const grayColour = "#f2f2f2";
        const grayValue = parseInt(grayColour.substring(1,3),16);

        var R = parseInt(colour.substring(1,3),16);
        var G = parseInt(colour.substring(3,5),16);
        var B = parseInt(colour.substring(5,7),16);
    
        R = parseInt(grayValue + R*(percent/100));
        G = parseInt(grayValue + G*(percent/100));
        B = parseInt(grayValue + B*(percent/100));
    
        R = (R<255)?R:255;  
        G = (G<255)?G:255;  
        B = (B<255)?B:255;  

        R = (R>0)?R:0;  
        G = (G>0)?G:0;  
        B = (B>0)?B:0;  
    
        R = Math.round(R);
        G = Math.round(G);
        B = Math.round(B);
    
        var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));
    
        return "#"+RR+GG+BB;
    }

    function handleChangeColour(newColour) {
        setColour(newColour.hex);
        grayScaleValue = getGrayScaleValue(newColour.hex);
        document.documentElement.style.setProperty("--app-bg-colour", newColour.hex);

        //Determine neutrality
        if ((newColour.rgb.r === newColour.rgb.g) && (newColour.rgb.g === newColour.rgb.b)) {
            neutral = true;
        }
        else {
            neutral = false
        }
        
        //Determine Twitter colour and related colours
        if (neutral || (grayScaleValue < 30) || (grayScaleValue > 235)) {
            document.documentElement.style.setProperty("--twitter-colour", "#219afd");
            document.documentElement.style.setProperty("--twitter-button-hover-colour", "#1c81d3");
            document.documentElement.style.setProperty("--twitter-small-button-bg-colour", "rgba(160, 214, 255, 0.227)");
        }
        else {
            if (grayScaleValue < 30) {
                twitterColour = shadeColour(newColour.hex, 25);
                twitterButtonHoverColour = shadeColour(newColour.hex, -20);
                twitterSmallButtonBGColour = shadeColour(newColour.hex, 65) + "3a";
            }
            else {
                twitterColour = shadeColour(newColour.hex, -25);
                twitterButtonHoverColour = shadeColour(newColour.hex, -30);
                twitterSmallButtonBGColour = shadeColour(newColour.hex, 40) + "3a";
            }
            document.documentElement.style.setProperty("--twitter-colour", twitterColour);
            document.documentElement.style.setProperty("--twitter-button-hover-colour", twitterButtonHoverColour);
            document.documentElement.style.setProperty("--twitter-small-button-bg-colour", twitterSmallButtonBGColour);
        }

        //Determine Subheading colour
        if (grayScaleValue >= 128) {
            twitterSubheadingColour = "#000000";
            twitterBorderColour = twitterBGColour;
        }
        else {
            twitterSubheadingColour = "#ffffff";
            twitterBorderColour = shadeColour(twitterBGColour, -80);
        }
        document.documentElement.style.setProperty("--twitter-subheading-colour", twitterSubheadingColour);
        document.documentElement.style.setProperty("--twitter-border-colour", twitterBorderColour);

        //Determine hover colour
        if (grayScaleValue >= 235) {
            document.documentElement.style.setProperty("--twitter-sidebar-option-hover-colour", twitterBGColour);
        }
        else if ((neutral && (grayScaleValue < 80) ) || (grayScaleValue < 50)) {
            document.documentElement.style.setProperty("--twitter-sidebar-option-hover-colour", "#3c3c3c");
        }
        else {
            document.documentElement.style.setProperty("--twitter-sidebar-option-hover-colour", twitterSmallButtonBGColour);
        }

        //Determine Secondary Text colour
        if ((grayScaleValue > 128) && (grayScaleValue < 188)) {
            twitterSecondaryTextColour = grayScaleToHex(grayScaleValue);
            shadeColour(twitterSecondaryTextColour, -20);
            document.documentElement.style.setProperty("--twitter-secondary-text-colour", twitterSecondaryTextColour);
        }
        else if ((grayScaleValue <= 128) && (grayScaleValue > 68)) {
            twitterSecondaryTextColour = grayScaleToHex(grayScaleValue);
            shadeColour(twitterSecondaryTextColour, 20);
            document.documentElement.style.setProperty("--twitter-secondary-text-colour", twitterSecondaryTextColour);
        }
        // //Determine Twitter BG colour and related Widget BG colour
        if (!neutral) {
            twitterBGColour = blendColours(twitterColour, 70);
            twitterWidgetBGColour = blendColours(twitterColour, 90);
        }
        else {
            twitterBGColour = "#eff3f4"
            twitterWidgetBGColour = shadeColour(twitterBGColour, 20);
        }
        document.documentElement.style.setProperty("--twitter-bg-colour", twitterBGColour);
        document.documentElement.style.setProperty("--twitter-widget-container-colour", twitterWidgetBGColour);
    }

    return (
        <div className="sidebar">
            <FaXTwitter className="sidebar-twitterIcon" />

            <SidebarOption active={selectedCategory === 'home' ? true: false} onClick={() => setSelectedCategory('home')} Icon={HomeIcon} text="Home" />
            <SidebarOption active={selectedCategory === 'explore' ? true: false} onClick={() => setSelectedCategory('explore')} Icon={SearchIcon} text="Explore" />
            <SidebarOption active={selectedCategory === 'notifications' ? true: false} onClick={() => setSelectedCategory('notifications')} Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption active={selectedCategory === 'messages' ? true: false} onClick={() => setSelectedCategory('messages')} Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption active={selectedCategory === 'lists' ? true: false} onClick={() => setSelectedCategory('lists')} Icon={ListAltIcon} text="Lists" />
            <SidebarOption active={selectedCategory === 'bookmarks' ? true: false} onClick={() => setSelectedCategory('bookmarks')} Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption active={selectedCategory === 'communities' ? true: false} onClick={() => setSelectedCategory('communities')} Icon={PeopleOutlineIcon} text="Communities" />
            <SidebarOption active={selectedCategory === 'profile' ? true: false} onClick={() => setSelectedCategory('profile')} Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption active={selectedCategory === 'more' ? true: false} onClick={() => setSelectedCategory('more')} Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar-tweet" fullWidth>Post</Button>

            <Button variant="outlined" className="colour-picker-button" halfWidth
                onClick={() => setShow(show => !show)}
            >
                {show ? "Close" : "Select Colour"}
            </Button>
            {
                show && (<ChromePicker className="colour-picker" color={colour} onChange={updatedColour => handleChangeColour(updatedColour)} />)
            }

            <div className="sidebar-profile">
                <div className="sidebar-user">
                    <Avatar className="sidebar-avatar" src={avatar} />
                    <div className="sidebar-profile-text">
                        <h2>{displayName}</h2>
                        <p>@{username}</p>
                    </div>
                    <VerifiedIcon className="sidebar-badge" />
                </div>

                <div className="sidebar-settings">
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;