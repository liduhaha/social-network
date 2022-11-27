import React from "react";
import style from './MessageBlock.module.css'

const MessageBlock = (props) => {
  return (
      <div>
          {props.children}
      </div>
  )
}

export default MessageBlock