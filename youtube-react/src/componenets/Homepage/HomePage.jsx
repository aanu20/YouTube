
import {home,thumb,playlist,watchlater,download,histroy} from "./images"
import './VideoGrid.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {

    const [selectedVideo, setSelectedVideo] = useState(null); // Store selected video
    const navigate = useNavigate();

    const videos=
    [{  title:"React Full Course for free ⚛️ (2024)",
        channel:"Bro Code",
        views:"1.5M views 1 year ago",
        id:1,
        video:"https://www.youtube.com/embed/CgkZ7MvWUAA",
        
  
    },{
        title:"JavaScript tutorial course in 5 Hours with projects",
        channel:"Error makes Clever",
        views:"1M views 1 year ago",
        id:2,
        video:"https://www.youtube.com/embed/poo0BXryffI",
    },
    {   title:"Placement and Internship Strategy :)",
        channel:"Apna College",
        views:"200k views 5 days ago",
        id:3,
        video:"https://www.youtube.com/embed/7hnYbygBNao",
    },
    {   title:"Java 8 Full Course in 9 hours ⚛️ (2024)",
        channel:"freeCodecamp",
        views:"2.5M views 5 year ago",
        id:4,
        video:"https://www.youtube.com/embed/grEKMHGYyns",
    },
    {   title:"How To Code So Good They Can't Ignore You",
        channel:"bigboxSWE",
        views:"50k views 2 days ago",
        id:5,
        video:"https://www.youtube.com/embed/_Idg_9IFxwY",
    },
    {   title:"How I Code Profitable Apps SOLO",
        channel:"Edmund Yong",
        views:"570k views 3 weeks ago",
        id:6,
        video:"https://www.youtube.com/embed/CNsvts6pVzo",
    }
    
    ];
   
    const Shorts=[
        {
            ShortsURL:"https://youtube.com/embed/Po4FCqAwIKU",
            id:1,
            title:"How Brain Rot Destroys student's life",
            views:"2.3M views",
        },{
            ShortsURL:"https://youtube.com/embed/Jayb9gf62kU",
            id:2,
            title:"Who are YOU",
            views:"21M views",
        },
        {
            ShortsURL:"https://youtube.com/embed/vZ_PdnlZ36E",
            id:3,
            title:"The Crown vs Real ",
            views:"11M views",
        },
        {
            ShortsURL:"https://youtube.com/embed/w6pP8QO8Nk0",
            id:4,
            title:"Garlic bread / Sarımsaklı Ekmek",
            views:"15M views",
        },
        
        
    ];
    const handleVideoClick = (video) => {
        console.log(video)
        setSelectedVideo(video); // Update state with the clicked video
        navigate(`/selected-video`, { state: { video } }); // Navigate to SelectedVideoGrid
      };

    return (
        <>
            <div className="buttons">
                <button className="button">All</button>
                <button className="button">Music</button>
                <button className="button">courses</button>
                <button className="button">podcasts</button>
                <button className="button">Software Engineering</button>
                <button className="button">T-series</button>
                <button className="button">Web series</button>
                <button className="button">Tamil Cinema</button>
            </div>
            <div  className="total-grid">
                <div className="right">
                    <div className="container">{
                            videos.map((video)=>{
                                return(<div>
                
                                    <iframe className="frameVideo" id="player"  width="350" height="250" src={`${video.video}?modestbranding=1&rel=0`}
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                                      <a href="#" className="videotitle" onClick={() => handleVideoClick(video)}>
                                        {video.title}
                                    </a>
                                    <div className="describeVideo">
                                        <p>{video.channel}</p>
                                        <p>{video.views}</p>
                                    </div>
                                </div>
                            )})}
                    </div>
                
                    <div className="shortsContainer">
                            {
                                Shorts.map((shorts)=>{
                                    return(<div>
                                        <iframe  className="frameShorts" width="250" height="350" src={shorts.ShortsURL}
                                        key={shorts.id}
                                        frameborder="0"></iframe>
                                        <h3 className="Shorttitle">{shorts.title}</h3>
                                        <p className="describeShorts">{shorts.views}</p>
                                        </div>)})
                            }
                    </div>
                </div>

                <div className="left">
                    <div className="left-bar">
                    
                        <div className='side-1'>
                            <button className="home-button" >
                                <img className="home" src={home}></img>Home
                            </button>
                            <button style={{ marginLeft: "25px" }} className="shorts-button">Shorts</button>
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
                            <button  className="history-button">
                                <img className="history" src={histroy}></img>History
                            </button>
                            <button  className="download-button">
                                <img className="download" src={download}></img>Download
                            </button>
                        </div>
                        
                    </div> 
            </div>
        </div>

        </>
    );
}

export default HomePage;
