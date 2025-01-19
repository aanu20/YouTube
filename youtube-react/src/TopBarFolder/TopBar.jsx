import youtubeLogo from "./images/youtube-fill.png";
function TopBar(){
    return (
    <>
        <img id="youtube-logo" src={youtubeLogo}></img>
        <h5>YouTube</h5>
        <input type="text" placeholder="search" name="search-name" ></input>
        <button id="create-button">Create</button>
    </>
    )
}
export default TopBar