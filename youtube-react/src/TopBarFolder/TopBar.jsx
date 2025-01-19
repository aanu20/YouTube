//import youtubeLogo from "./images/youtube-fill.png";
//import sidebar from "./images/side-bar-fill.png";
//it is multiple steps so include index.js in image and export all the images
import { youtubeLogo,sidebar,mic,loginbar } from "./images"
function TopBar(){
    return (
    <>  
        <img id= "side-bar-icon" src={sidebar}></img>
        <img id="youtube-logo" src={youtubeLogo}></img>
        <h5>YouTube</h5>
        <input type="text" placeholder="search" name="search-name" ></input>
        <img id="mic-icon" src={mic}></img>
        <button id="create-button">Create</button>
        <img id="login-icon" src={loginbar}></img>
    </>
    )
}
export default TopBar