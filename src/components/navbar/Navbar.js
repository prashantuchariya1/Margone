import React from "react";
import style from "./Navbar.module.css";



export default function Navbar() {
    
    
    return (
      <div className={style.navbar}>
        <div className={style.logo}><p>MarGone</p></div>
        <div className={style.navbarButtons}>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICE</a>
          <a href="#">DESIGN</a>
          <a href="#">CONTACT</a>
        </div>
        <div className={style.search}>
          
            <input className={style.searchInput} placeholder="Type to Search" />
            <a href="#" className={style.clearButton}>x</a>
            <button>Search</button>
            </div>



      </div>
    );
  }
  