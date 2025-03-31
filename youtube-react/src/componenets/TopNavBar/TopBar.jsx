import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { youtubeLogo, sidebar, mic, loginbar } from "./images";
import "./TopBar.css";
import {home,thumb,playlist,watchlater,download,histroy} from './left_bar_images';

function TopBar() {
    const navigate = useNavigate(); // Hook to navigate to another page
    const showHistory=()=>{
        navigate("/history")
    }
    const Showshorts=()=>{
        navigate("/shorts")
    }
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            const searchValue = event.target.value; // Get the value of the search bar
            navigate(`/search?query=${encodeURIComponent(searchValue)}`); // Navigate with query param
        }
    };

    return (
        <>
            <div className="top-bar">
                <div className="Top">
                    <img id="side-bar-icon" src={sidebar} alt="Sidebar Icon" />
                    <img id="youtube-logo" src={youtubeLogo} alt="YouTube Logo" />
                    <span id="youtube-text">YouTube</span>
                    <input
                        id="search-bar"
                        type="text"
                        placeholder="Search"
                        name="search-name"
                        onKeyDown={handleKeyPress} // Add the keydown event
                    />
                    <img id="mic-icon" src={mic} alt="Microphone Icon" />
                    <button id="create-button">Create</button>
                    <img id="login-icon" src={loginbar} alt="Login Icon" />
                </div>
            </div>

            <div className="left">
                    <div className="left-bar">
                    
                        <div className='side-1'>
                            <button className="home-button" >
                                <img className="home" src={home}></img>Home
                            </button>
                            <button style={{ marginLeft: "25px" }} onClick={Showshorts} className="shorts-button">Shorts</button>
                            <button style={{ marginLeft: "25px" }}className="subs-button">Subscriptions</button>
                        </div>
                        <div className="side-2">
                            <button className="like-button">
                                <img className="like" src={thumb}></img>Likes
                            </button>
            
                            <button  className="play-list-button">
                                <img className="playlist" src={playlist}></img>Playlist
                            </button>
            
                            <button  className="watchlater-button">
                                <img className="watchlater" src={watchlater}></img>Playlist
                            </button>
                            <button  className="history-button" onClick={showHistory}>
                                <img className="history"  src={histroy}></img>History
                            </button>
                            <button  className="download-button">
                                <img className="download" src={download}></img>Download
                            </button>
                        </div>
                        
                    </div> 
            </div>
        </>
    );
}

export default TopBar;
