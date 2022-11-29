import React from "react";
import style from './Message.module.css'

const Message = (props) => {
  return (
      <div className={style.messageEl}>
          <header>
              <img src={props.img} alt=""/>
              <div>{props.user}</div>
          </header>



          <section>

          </section>
      </div>
  )
}

export default Message