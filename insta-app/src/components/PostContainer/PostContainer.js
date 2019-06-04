import React from "react";
import "./PostContainer.css";
import Post from "./Post/Post";
import CommentSection from "./CommentSection/CommentSection";
import PropTypes from 'prop-types';


function PostContainer({ data }) {
  return (
    <div className='post-container' >
       
          <Post data={data} />
          <CommentSection data={data} />
         
   
    </div>
  );
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )
        })
    )
}

export default PostContainer;