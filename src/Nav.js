import React from 'react';
import "./Nav.css";
import homeIcon from "./img/home.PNG";
import logoIcon from "./img/logo.PNG";
import messengerIcon from "./img/messenger.PNG";
import addIcon from "./img/add.PNG";
import exploreIcon from "./img/explore.PNG";
import likeIcon from "./img/like.PNG";

function Nav() {
  return (
    <div>
      <nav className="navbar">
      <div className="nav-wrapper">
      <img src= {logoIcon} className="brand-img" alt=""/>
      <input type="text" className="search-box" placeholder="search"/>
        <div className="nav-items">
          <img src={homeIcon} className="icon" alt=""/>
          <img src= {messengerIcon} className="icon" alt=""/>
          <img src={addIcon} className="icon" alt=""/>
          <img src={exploreIcon} className="icon" alt=""/>
          <img src={likeIcon} className="icon" alt=""/>
          <div className="icon user-profile"></div>
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Nav