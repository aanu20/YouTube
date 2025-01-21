//import youtubeLogo from "./images/youtube-fill.png";
//import sidebar from "./images/side-bar-fill.png";
//it is multiple steps so include index.js in image and export all the images
import { youtubeLogo,sidebar,mic,loginbar } from "./images"
import "./TopBar.css"
function TopBar(){
    return (
    <>  
        <div className="Top">    
            <img id= "side-bar-icon" src={sidebar}></img>
            <img id="youtube-logo" src={youtubeLogo}></img>
            <span >YouTube</span>
            <input id="search-bar" type="text" placeholder="search" name="search-name" ></input>
            <img id="mic-icon" src={mic}></img>
            <button id="create-button">Create</button>
            <img id="login-icon" src={loginbar}></img>
        </div>

        <div>
            <button>All</button>
            <button>Music</button>
            <button>courses</button>
            <button>podcasts</button>
            <button>Tamil Cinema</button>
        </div>
    </>
    )
}
export default TopBar