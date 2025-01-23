import { useState } from "react";

function SelectedVideoGrid({videos}){
    const [current,setCurrent]=useState(
        {currentid: 1,
        currentvideo: "https://www.youtube.com/embed/CgkZ7MvWUAA",
        }
    );
    const displayVideo=(id)=>{
        const selectedVideo=videos.find((video)=> video.id===id)
        setCurrent({currentid:selectedVideo.id,
                    currentvideo:selectedVideo.video});
        console.log(current)
   };
    return(
        <>
           
            <div>
            {
            videos.map((video)=>(
                <div
                    key={video.id} 
                    onClick={()=>{
                        console.log("clicked");
                         displayVideo(video.id)}
    
                    }>
                        {video.title}
                </div>
            ))  
            }
        </div>
           
        </>
    )
}
export default SelectedVideoGrid;