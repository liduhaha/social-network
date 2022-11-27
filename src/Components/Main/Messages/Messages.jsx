import React from "react";
import style from './Messages.module.css'
import Nav from "./Nav/Nav";
import MessageBlock from "./MessageBlock/MessageBlock";
import {Route, Routes} from "react-router-dom";
import Message1 from "./MessageBlock/Message1/Message1";


const Messages = (props) => {
  return (
      <div className={style.messages}>
          <MessageBlock>
              <Routes>
                  <Route path={"/messages/*"} element={<Nav forNav={props.forMessages}/>}/>
                  <Route path={"/messages/Fsdf-Rfd"} element={<Message1/>}/>
              </Routes>
          </MessageBlock>
      </div>
  )
}

export default Messages