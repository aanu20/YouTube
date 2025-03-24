import { useParams } from "react-router-dom";
import './SelectedVideo.css';

function SelectedVideoGrid({ videos, searchvideolist }) {
  const { videoid } = useParams();
  const video = videos.find((v) => v.id === parseInt(videoid));
  
  // Find related videos by filtering the `searchvideolist`
  const searchVideos = searchvideolist.map((language) => 
    language.videos.find((v) => v.id === parseInt(videoid))
  );
  console.log(searchVideos)
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
  const finalvideo=video||searchVideos[0]||searchVideos[1];
  console.log(finalvideo)
  return (
    <div>
      <div id="selectedvideo">
          <iframe
            id="frameVideo"
            width="700"
            height="400"
            src={`${finalvideo.video}?modestbranding=1&rel=0`}
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${finalvideo.title}`}
          ></iframe>
          <h2>{finalvideo.title}</h2>
          <p>
            {finalvideo.channel}{" "}
            <button className="subscribe-button" onClick={ChangeToSubscribed}>
              Subscribe
            </button>
          </p>
          <p>{finalvideo.views}</p>
    </div>
{/* 
    <div id="searchVideos">
            <div  className="search-video">
              {searchVideos.id > 9 ? (
                <>
              <iframe
                width="300"
                height="180"
                src={`${searchVideos.URL}?modestbranding=1&rel=0`}
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Playing ${searchVideos.title}`}
              ></iframe>
              <p>{searchVideos.title}</p>
              <p>{searchVideos.channel}</p>
              <p>{searchVideos.views}</p>
             </> ):
             (<p>hi</p>)}
            </div>
        </div> */}
      </div>
  );
}

export default SelectedVideoGrid;
