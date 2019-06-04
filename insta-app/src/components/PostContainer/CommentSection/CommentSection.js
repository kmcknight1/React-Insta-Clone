import React, { useState } from "react";
import "./CommentSection.css";
// import moment from 'moment';

function CommentSection({ data }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(data.comments);


  return (
    <div className="comment-section">
      <p>
        <strong>{data.likes} likes</strong>
      </p>
      {comments.map(item => (
        <p>
          <strong>{item.username}</strong> {item.text}
        </p>
      ))}
      <form
        onSubmit={e => {
          e.preventDefault();
          const newComment = {
            username: "super_cool_username",
            text: commentText
          };
          setComments([...comments, newComment]);
          setCommentText("");
        }}
      >
        <input
          className="addComment"
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
      </form>
      <p>{data.timestamp}</p>
    </div>
  );
}

export default CommentSection;
