import React, {useEffect, useRef} from "react";
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
  return (
      <nav className={style.navbar}>
          <header>
              <div></div>
          </header>

          <nav className={style.nav_NavLink}>
              <NavLink to={'/home'} id={style.home} className={style.navlinkCont}>
                  <div></div>
                  <div>{props.forNav.navbar.home}</div>
              </NavLink>
              <NavLink to={'/knowledge-base'} id={style.knowledgeBase} className={style.navlinkCont}>
                  <div></div>
                  <div>{props.forNav.navbar.knowledge_base}</div>
              </NavLink>
              <NavLink to={'/messages'} id={style.messages} className={style.navlinkCont}>
                  <div></div>
                  <div>{props.forNav.navbar.messages}</div>
              </NavLink>
              <NavLink to={'/members'} id={style.members} className={style.navlinkCont}>
                  <div></div>
                  <div>{props.forNav.navbar.members}</div>
              </NavLink>
              <NavLink to={'/groups'} id={style.groups} className={style.navlinkCont}>
                  <div></div>
                  <div>{props.forNav.navbar.groups}</div>
              </NavLink>
          </nav>
      </nav>
  )
}

export default Nav;