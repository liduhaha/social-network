import React from "react";
import style from './Post.module.css'

const Post = (props) => {
  return (
      <div className={style.postElement}>
          <header>
              <img src={props.img} alt=""/>
              <div className={style.post_data}>
                  <div>{props.user}</div>
                  <div>{props.time}</div>
              </div>
          </header>
          <div className={style.post_body}>
              {props.message}
          </div>
          <div className={style.btnCont}>
              <button></button>
              <button></button>
          </div>
      </div>
  )
}

export default Post