import React from "react";
import style from './ChatHistory.module.css'
import classNames from "classnames";

const ChatHistory = (props) => {
  return (
      <div className={style.chatHistory}>
          <section>
              <div className={classNames(style.left, style.chat)}>{props.from_001}</div>
              <div className={classNames(style.left, style.chat)}>{props.from_002}</div>
              <div className={classNames(style.left, style.chat)}>{props.from_003}</div>
          </section>

          <section>
              <div className={classNames(style.right, style.chat)}>{props.to_001}</div>
              <div className={classNames(style.right, style.chat)}>{props.to_002}</div>
              <div className={classNames(style.right, style.chat)}>{props.to_003}</div>
          </section>
      </div>
  )
}

export default ChatHistory