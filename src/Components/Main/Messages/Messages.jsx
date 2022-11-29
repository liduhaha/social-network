import React from "react";
import style from './Messages.module.css'
import Nav from "./Nav/Nav";
import MessageBlock from "./MessageBlock/MessageBlock";
import {Route, Routes} from "react-router-dom";
import Chat1 from "./MessageBlock/Chat1/Chat1";
import ChooseChat from "./MessageBlock/ChooseChat/ChooseChat";
import Chat2 from "./MessageBlock/Chat2/Chat2";
import Chat3 from "./MessageBlock/Chat3/Chat3";


const Messages = (props) => {
  return (
      <div className={style.messages}>
          <Nav forNav={props.forMessages}/>
          <MessageBlock>
              <Routes>
                  <Route path={"/*"} element={<ChooseChat forChooseChat={props.forMessages}/>}/>
                  <Route path={"Fsdf-Rfd"} element={<Chat1 forChat1={props.forMessages}/>}/>
                  <Route path={"Gsd-Gsdc"} element={<Chat2 forChat2={props.forMessages}/>}/>
                  <Route path={"Fsdv-Jsdvc"} element={<Chat3 forChat3={props.forMessages}/>}/>
              </Routes>
          </MessageBlock>
      </div>
  )
}

export default Messages