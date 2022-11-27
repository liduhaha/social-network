import React from "react";
import style from './Menu.module.css'
import {NavLink} from "react-router-dom";



const Menu = (props) => {
  return (
      <div className={style.menu}>
          <header>{props.forMenu.menu.header}</header>

          <form action="">
              <div>
                  <img src={props.forMenu.menu.search_img} alt=""/>
                  <input type="text" placeholder={props.forMenu.menu.input}/>
              </div>
              <button type={"submit"}>{props.forMenu.menu.search_btn}</button>
          </form>

          <nav>
              <NavLink to={"/knowledge-base/analytics"} className={style.menu_NavLink}>{props.forMenu.menu.nav1}</NavLink>
              <NavLink to={"/knowledge-base/popular-questions"} className={style.menu_NavLink}>{props.forMenu.menu.nav2}</NavLink>
              <NavLink to={"/knowledge-base/purchase-and-refund"} className={style.menu_NavLink}>{props.forMenu.menu.nav3}</NavLink>
          </nav>
      </div>
  )
}

export default Menu