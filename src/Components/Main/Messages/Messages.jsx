import React from "react";
import style from './Messages.module.css'
import Nav from "./Nav/Nav";
import MessageBlock from "./MessageBlock/MessageBlock";
import {Route, Routes} from "react-router-dom";
import Chat1 from "./MessageBlock/Chat1/Chat1";
import ChooseChat from "./MessageBlock/ChooseChat/ChooseChat";


const Messages = (props) => {
  return (
      <div className={style.messages}>
          <Nav forNav={props.forMessages}/>
          <MessageBlock>
              <Routes>
                  <Route path={"/*"} element={<ChooseChat forChooseChat={props.forMessages}/>}/>
                  <Route path={"/Fsdf-Rfd"} element={<Chat1 forChat1={props.forMessages}/>}/>
                  {/*<Route path={"/Gsd-Gsdc"} element={<MessageParent/>}/>*/}
                  {/*<Route path={"/Fsdv-Jsdvc"} element={<MessageParent/>}/>*/}
              </Routes>
          </MessageBlock>
      </div>
  )
}

export default Messages