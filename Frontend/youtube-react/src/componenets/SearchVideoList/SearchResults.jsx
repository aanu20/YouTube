import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SearchResults.css"
function SearchResults({searchvideolist}) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query"); // Get the 'query' parameter
    const navigate = useNavigate();
    
    const handleVideoClick = (video) => {
      navigate(`/selected-video/${video.id}`); // Navigate to SelectedVideoGrid with the video ID
    };

    return (
        <>
         <div className="searchbody">
            {searchvideolist.map((language) => {
                // Check if the search query matches the language
                if (searchQuery === language.language) {
                // Iterate over the videos array within the matched language object
                return language.videos.map((video, index) => (
                  <div key={index}>
                  <iframe
                  className="searchframeVideo"
                  width="750"
                  height="350"
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


        //             <div key={index} >
        //             <div className="videotitle"
        //                     onClick={() => handleVideoClick(video)}>
        //                     {video.title}
        //               </div>
        //             <p>Channel: {video.channel}</p>
        //             <p>Views: {video.views}</p>
        //             <iframe
        //                 width="560"
        //                 height="315"
        //                 src={video.URL}
        //                 title={video.title}
        //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                 frameborder="0"
        //                 allowFullScreen
        //             ></iframe>
        // </div>
      ));
    }
  })}
</div>

        </>
    );
}

export default SearchResults;
