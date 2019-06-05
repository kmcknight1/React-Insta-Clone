import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { far, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { fas, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas, faHeart, faInstagram, faUser, faSearch);

function SearchBar(props) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon
        icon={["fab", "instagram"]}
        className="insta-icon"
        size="2x"
      />

      <img
        className="logoText"
        src="https://www.wslogos.com/wp-content/uploads/2019/02/latest-instagram-2-logo-svg-vector-png-transparent-vector-logo-supply-of-the-day.png"
        alt="InstagramLogo"
      />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={props.search}
          onChange={e => props.setSearch(e.target.value)}
        />
      </form>

      <FontAwesomeIcon icon={["far", "heart"]} className="heart" size="2x" />
      <FontAwesomeIcon icon={["far", "user"]} className="user" size="2x" />
    </div>
  );
}

export default SearchBar;
