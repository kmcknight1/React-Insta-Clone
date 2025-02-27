import React, { useState } from "react";
import "./CommentSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far, faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
// import moment from 'moment';

library.add(far, faHeart, faComment);

function CommentSection({ data }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(data.comments);
  const [likes, setLikes] = useState(data.likes);

  return (
    <div className="comment-section">
      <FontAwesomeIcon
        icon={["far", "heart"]}
        className="like"
        size="2x"
        onClick={e => {
          e.preventDefault();
          setLikes((data.likes += 1));
        }}
      />
      <FontAwesomeIcon
        icon={["far", "comment"]}
        className="comment"
        size="2x"
      />

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
