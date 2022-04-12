import React from 'react'
import homeIcon from "./img/home.PNG"
import logoIcon from "./img/logo.PNG"
import messengerIcon from "./img/messenger.PNG"
import addIcon from "./img/add.PNG"
import exploreIcon from "./img/explore.PNG"
import likeIcon from "./img/like.PNG"
import "./Nav.css"

function Nav() {
  return (
    <div class="nav">
       <nav class="navbar">
       <div class="nav-wrapper">
        <img src= {logoIcon} class="brand-img" alt=""/>
        <input type="text" class="search-box" placeholder="search"/>
        <div class="nav-items">
            <img src={homeIcon} class="icon" alt=""/>
            <img src= {messengerIcon} class="icon" alt=""/>
            <img src={addIcon} class="icon" alt=""/>
            <img src={exploreIcon} class="icon" alt=""/>
            <img src={likeIcon} class="icon" alt=""/>
            <div class="icon user-profile"></div>
        </div>
        </div>
       </nav>
</div>

  )
}

export default Nav