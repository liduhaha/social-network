import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
      <header className={style.header}>
          <form action="GET">
              <button type="submit">
                  <img src={props.forHeader.header.search_img} alt=""/>
              </button>
              <input type="text" placeholder={props.forHeader.header.input}/>
          </form>



          <div className={style.myAcc}>

              <nav>
                  <NavLink to={"/a"} className={style.navLink}></NavLink>
                  <NavLink to={"/a"} className={style.navLink}></NavLink>
              </nav>

              <div className={style.myAccInfo}>
                  <img src={props.forHeader.header.profile_img} alt="profile_img"/>
                  <div>{props.forHeader.header.greating}{props.forHeader.header.user}</div>
              </div>
          </div>

      </header>
  )
}

export default Header