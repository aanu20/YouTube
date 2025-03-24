import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoGrid.css";
import {home,thumb,playlist,watchlater,download,histroy} from "./images"

function HomePage({ videos, Shorts }) {
  const navigate = useNavigate();

  const handleVideoClick = (video) => {
    navigate(`/selected-video/${video.id}`); // Navigate to SelectedVideoGrid with the video ID
  };

  return (
    <>

       <div className="total-grid">
        <div className="buttons">
            <button className="button">All</button>
            <button className="button">Music</button>
            <button className="button">Courses</button>
            <button className="button">Podcasts</button>
            <button className="button">Software Engineering</button>
            <button className="button">T-series</button>
            <button className="button">Web Series</button>
            <button className="button">Tamil Cinema</button>
        </div>
        
            <div className="right">
                <div className="container">
                    {videos.map((video) => (
                        <div key={video.id}>
                        <iframe
                        className="frameVideo"
                        width="350"
                        height="250"
                        src={`${video.video}?modestbranding=1&rel=0`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe><div className="videotitle"
                            onClick={() => handleVideoClick(video)}>
                            {video.title}
                            </div>
                            <div className="describeVideo">
                            <p>{video.channel}</p>
                            <p>{video.views}</p>
                            </div>
                        </div>
                        ))}
                </div>        

          <div className="shortsContainer">
            {Shorts.map((short) => (
              <div key={short.id}>
                <iframe
                  className="frameShorts"
                  width="250"
                  height="350"
                  src={short.ShortsURL}
                  frameBorder="0"
                ></iframe>
                <h3 className="Shorttitle">{short.title}</h3>
                <p className="describeShorts">{short.views}</p>
              </div>
            ))}
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
