
function VideoGrid(){
    const videos=
    [{
        id:1,
        video:"https://www.youtube.com/embed/CgkZ7MvWUAA",
  
    },{
        id:2,
        video:"https://www.youtube.com/embed/poo0BXryffI",
    },
    {
        id:3,
        video:"https://www.youtube.com/embed/7hnYbygBNao",
    },
    {
        id:4,
        video:"https://www.youtube.com/embed/grEKMHGYyns",
    },
    {
        id:5,
        video:"https://www.youtube.com/embed/_Idg_9IFxwY",
    },
    {
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
                    </div>
                )})
            }
        </div>
        </>
    )
}
export default VideoGrid;