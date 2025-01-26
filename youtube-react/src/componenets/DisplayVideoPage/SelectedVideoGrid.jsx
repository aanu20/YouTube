import { useLocation } from "react-router-dom";

function SelectedVideoGrid() {
  const location = useLocation();
  const video = location.state?.video;

  if (!video) {
    return <p>No video selected. Please go back and choose a video.</p>;
  }

  return (
    <div>
      <iframe
        className="frameVideo"
        id="player"
        width="700"
        height="400"
        src={`${video.video}?modestbranding=1&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>{video.title}</h2>
      <p>{video.channel}</p>
      <p>{video.views}</p>
    </div>
  );
}

export default SelectedVideoGrid;
