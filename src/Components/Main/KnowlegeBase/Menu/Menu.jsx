import React from "react";
import style from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = (props) => {
  return (
      <div className={style.menu}>
          <header>{props.forMenu.knowledge_base_page.menu.header}</header>

          <form action="">
              <div>
                  <img src={props.forMenu.knowledge_base_page.menu.search_img} alt=""/>
                  <input type="text" placeholder={props.forMenu.knowledge_base_page.menu.input}/>
              </div>
              <button type={"submit"}>{props.forMenu.knowledge_base_page.menu.search_btn}</button>
          </form>

          <nav>
              <NavLink to="/knowledge-base/analytics" className={style.menu_NavLink}>{props.forMenu.knowledge_base_page.menu.nav1}</NavLink>
              <NavLink to="/knowledge-base/popular-questions" className={style.menu_NavLink}>{props.forMenu.knowledge_base_page.menu.nav2}</NavLink>
              <NavLink to="/knowledge-base/purchase-and-refund" className={style.menu_NavLink}>{props.forMenu.knowledge_base_page.menu.nav3}</NavLink>
          </nav>
      </div>
  )
}

export default Menu