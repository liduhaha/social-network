import React from "react";
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";
import state from '../../../state'
import NavUser from "./NavUser/NavUser";

let navElement = state.messages.map(nav => <NavUser img={nav.img} user={nav.user} path={nav.path} lastMessage={nav.history.answer3}/>)

const Nav = (props) => {
  return (
      <div className={style.nav_messages}>
          {navElement}
      </div>
  )
}

export default Nav