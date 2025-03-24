import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { youtubeLogo, sidebar, mic, loginbar } from "./images";
import "./TopBar.css";

function TopBar() {
    const navigate = useNavigate(); // Hook to navigate to another page

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
        </>
    );
}

export default TopBar;
