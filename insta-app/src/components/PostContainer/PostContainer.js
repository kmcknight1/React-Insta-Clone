import React from "react";
import "./PostContainer.css";
import Post from "./Post/Post";
import CommentSection from "./CommentSection/CommentSection";


function PostContainer({ data }) {
  return (
    <div className='post-container' >
       
          <Post data={data} />
          <CommentSection data={data} />
         
   
    </div>
  );
}

export default PostContainer;