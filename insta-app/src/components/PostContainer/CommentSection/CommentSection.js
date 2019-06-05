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
  let [liked, setLiked] = useState(data.likes);
  let [focus, setFocus] = useState(false);

  return (
    <div className="comment-section">
      {liked ? (
        <FontAwesomeIcon
          icon={["far", "heart"]}
          className="not-liked"
          size="2x"
          onClick={e => {
            e.preventDefault();
            setLiked(((data.likes += 1), (liked = false)));
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={["far", "heart"]}
          className="liked"
          size="2x"
          onClick={e => {
            e.preventDefault();
            setLiked(((data.likes -= 1), (liked = true)));
          }}
        />
      )}

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
          newComment.text !== "" && setComments([...comments, newComment]);
          setCommentText("");
        }}
      >
        <input
          className="comment-input"
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          onChange={e => {
            e.target.value !== "" && setCommentText(e.target.value);
          }}
        />
        <button
          className={focus ? "add-comment-focused" : "add-comment-not-focused"}
          type="submit"
        >
          ...
        </button>
      </form>
      <p>{data.timestamp}</p>
    </div>
  );
}

export default CommentSection;
