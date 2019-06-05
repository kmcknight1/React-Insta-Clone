import React, { useState } from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";
import "./PostsPage.css";

function PostsPage() {
  let data = dummyData;

  const [search, setSearch] = useState("");

  if (search !== "") {
    data = dummyData.filter(post => {
      return post.username.includes(search.toLowerCase());
    });
  }

  return (
    <div className="posts">
      <header>
        <SearchBar search={search} setSearch={setSearch} />
      </header>

      {data.length !== 0 ? (
        data.map(item => <PostContainer data={item} />)
      ) : (
        <h2 className="no-results">No results found</h2>
      )}
    </div>
  );
}

export default PostsPage;
