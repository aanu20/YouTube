
import SelectedVideoGrid from "./SelectedVideoGrid";
function VideoGrid(){

    
    
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
   
    
    return(
         <>
        <div className="container">
                           
            {
                videos.map((video)=>{
                    return(<div>
                        
                            <iframe id="player"  width="640" height="350"
                            src={video.video}
                            key={video.id}
                            frameborder="0"></iframe>
                            <h2>{video.title}</h2>
                            <h4>{video.channel}</h4>
                            <h4>{video.views}</h4>
                    </div>
                )})
            }
            
        </div>
{/*         
    <SelectedVideoGrid videos={videos} /> */}
    </>   
    )
}
export default VideoGrid;
