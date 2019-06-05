import React from "react";
import "./App.css";
import PostsPage from "./components/PostsPage/PostsPage";
import withAuthenticate from "./components/withAuthenticate";

function App() {
  return (
    <div className="app">
      <PostsPage />
    </div>
  );
}

export default withAuthenticate(App);
