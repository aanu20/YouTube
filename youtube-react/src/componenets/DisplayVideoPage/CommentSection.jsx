import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './CommentsSection.css';
function CommentSection() {
    const { videoid } = useParams();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
          .then(res => res.json())
          .then(data => {
            setComments(data.comments);
            setLoading(false);
          })
          .catch(error => {
            console.error("Error fetching comments:", error);
            setLoading(false);
          });
    }, [videoid]);

    return (
        <div className="comment-section-container">
            <h2>Comments</h2>
            {loading ? (
                <p className="loading-comments">Loading comments...</p>
            ) : (
                <div className="comments-list">
                    {comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <strong>{comment.user.username}</strong>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CommentSection;