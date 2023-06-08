import React from 'react';
import "./Widgets.css";
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className='widgets__input'>
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder='Search Ruk' type="text"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1462213919519379461"}/>
                <TwitterTimelineEmbed
                sourceType = "profile" 
                screenName = "nidhoggruk"
                options = {{height:400}}
                />
                <TwitterShareButton
                url={"https://www.youtube.com/watch?v=iArXv64tCJA&ab_channel=PeterBjornJohnVEVO"}
                options={{ text: "#ElPepe", via: "Ajota25_" }}
        />
            </div>
        </div>
    )
}

export default Widgets
