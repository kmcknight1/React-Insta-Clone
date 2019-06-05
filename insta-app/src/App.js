import React from "react";
import "./App.css";
import PostsPage from "./components/PostsPage/PostsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import withAuthenticate from "./components/withAuthenticate";

function App() {
  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage, LoginPage);

  return (
    <div className="app">
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
