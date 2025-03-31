import './ShortsPage.css';

function ShortsPage({ Shorts }) {
    return (
        <div className="shortscontainer">
            <div className="shorts-grid">
                {Shorts.map((short) => (
                    <div key={short.id} className="short-item">
                        <iframe
                            width="350"
                            height="550"
                            src={`${short.ShortsURL}?modestbranding=1&rel=0`}
                            style={{ borderRadius: "5px" }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={short.title}
                        ></iframe>
                        <div className="short-info">
                            <h3>{short.title}</h3>
                            <p>{short.views}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShortsPage;