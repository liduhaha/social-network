import React from "react";
import style from './WriteMessage.module.css'

const WriteMessage = (props) => {
  return (
      <div className={style.writeMessage}>
          <textarea name="" id="" placeholder={props.forWriteMessage.messages_page.create_message.input}></textarea>
          <button type={"submit"}></button>
      </div>
  )
}

export default WriteMessage