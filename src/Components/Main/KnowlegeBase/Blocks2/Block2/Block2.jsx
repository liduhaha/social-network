import React from "react";
import style from './Block2.module.css'
import {NavLink} from "react-router-dom";

const Block2 = (props) => {
  return (
      <div className={style.block}>
          <header>
              <img src={props.img} alt=""/>
              <div>{props.header}</div>
          </header>

          <nav>
              <NavLink to={"/"} className={style.block_NavLink}><img src={props.list} alt=""/> {props.row1}</NavLink>
              <NavLink to={"/"} className={style.block_NavLink}><img src={props.list} alt=""/> {props.row2}</NavLink>
              <NavLink to={"/"} className={style.block_NavLink}><img src={props.list} alt=""/> {props.row3}</NavLink>
          </nav>
      </div>
  )
}

export default Block2