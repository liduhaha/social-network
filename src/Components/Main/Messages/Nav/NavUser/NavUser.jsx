import React from "react";
import style from './NavUser.module.css'
import {NavLink} from "react-router-dom";

const NavUser = (props) => {
  return (
      <div className={style.navUser}>
          <NavLink to={props.path} className={style.navUser_Link}>
              <img src={props.img} alt=""/>
              <div className={style.msg_container}>
                  <div>{props.user}</div>
                  <div>{props.lastMessage}</div>
              </div>
          </NavLink>
      </div>
  )
}

export default NavUser