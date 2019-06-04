import React from "react";
import "./Post.css";

function Post({ data }) {
  return (
    <div className="post">
      <div className="userRow">
        <div className="img">
          <img className="thumbnailUrl" src={data.thumbnailUrl} />
        </div>
        <p className="postUsername">{data.username}</p>
      </div>
      <img className="image" src={data.imageUrl} />
    </div>
  );
}

export default Post;
