import React from "react";
import style from './ChooseChat.module.css'
import classNames from "classnames";

const ChooseChat = (props) => {
  return (
      <div className={style.chooseChat}>
          <div className={classNames(style.chat, style.right)}>{props.forChooseChat.messages_page.chooseChat.text}</div>
      </div>
  )
}

export default ChooseChat