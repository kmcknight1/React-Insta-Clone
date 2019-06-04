import React, { useState, useEffect } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="searchBar">
      <img
        className="logoImg"
        src="https://cdn2.iconfinder.com/data/icons/social-networks-18/100/Instagram_logo-512.png"
      />
      <img
        className="logoText"
        src="https://www.wslogos.com/wp-content/uploads/2019/02/latest-instagram-2-logo-svg-vector-png-transparent-vector-logo-supply-of-the-day.png"
      />
      <form onSubmit={e => e.preventDefault()}>
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      {/* <img src='https://image.flaticon.com/icons/png/512/20/20119.png' /> */}
    </div>
  );
}

export default SearchBar;
