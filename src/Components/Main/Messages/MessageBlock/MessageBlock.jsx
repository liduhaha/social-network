import React from "react";
import style from './MessageBlock.module.css'

const MessageBlock = (props) => {
  return (
      <div className={style.messageBlock}>
          {props.children}
      </div>
  )
}

export default MessageBlock