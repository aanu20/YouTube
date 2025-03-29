import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import './SelectedVideo.css';

function SelectedVideoGrid({ videos, searchvideolist }) {
  const { videoid } = useParams();
  const navigate = useNavigate();
  
  // Find the main video
  const video = videos.find((v) => v.id === parseInt(videoid));
  
  // Find related videos (all videos except the current one)
  const relatedVideos = searchvideolist.flatMap(language => 
    language.videos.filter(v => v.id !== parseInt(videoid))
  ).slice(0, 3); // Limit to 3 related videos

  const finalvideo = video || searchvideolist.flatMap(l => l.videos).find(v => v.id === parseInt(videoid));

  function ChangeToSubscribed(event) {
    const element = event.target;
    if (element.innerHTML === "Subscribe") {
      element.innerHTML = "Subscribed";
      element.style.backgroundColor = "dimgrey";
    } else {
      element.innerHTML = "Subscribe";
      element.style.backgroundColor = "white";
    }
  }

  const handleCommentsClick = () => {
    navigate(`/selected-video/${videoid}/comments`);
  };

  return (
    <div className="video-container">
      <div id="selectedvideo">
        <iframe
          id="frameVideo"
          width="700"
          height="400"
          src={`${finalvideo.video}?modestbranding=1&rel=0`}
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={finalvideo.title}
        ></iframe>
        <h2>{finalvideo.title}</h2>
        <p>
          {finalvideo.channel}{" "}
          <button className="subscribe-button" onClick={ChangeToSubscribed}>
            Subscribe
          </button>
        </p>
        <p>{finalvideo.views}</p>
        <div>
          <button onClick={handleCommentsClick}>
            View Comments
          </button>
        </div>
      </div>

      {relatedVideos.length > 0 && (
        <div id="relatedVideos">
          <h3>Related Videos</h3>
          {relatedVideos.map(video => (
            <div key={video.id} className="related-video">
              <iframe
                width="500"
                height="280"
                src={`${video.video}?modestbranding=1&rel=0`}
                style={{ border: "none" }}
                allowFullScreen
                title={video.title}
              ></iframe>
              <p>{video.title}</p>
              <p>{video.channel}</p>
              <p>{video.views}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectedVideoGrid;