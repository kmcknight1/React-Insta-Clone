import React, { useState } from "react";
import "./SearchBar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faHeart} from '@fortawesome/free-solid-svg-icons';

// library.add(
//     fab, faHeart
// )


function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="searchBar">
      <img
        className="logoImg"
        src="https://cdn2.iconfinder.com/data/icons/social-networks-18/100/Instagram_logo-512.png"
        alt='InstagramIcon'
      />
      <img
        className="logoText"
        src="https://www.wslogos.com/wp-content/uploads/2019/02/latest-instagram-2-logo-svg-vector-png-transparent-vector-logo-supply-of-the-day.png"
        alt='InstagramLogo'
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
    
    </div>
  );
}

export default SearchBar;
