import React from "react";
import style from './Chat1.module.css';
import state from '../../../../state';
import ChatHistory1 from "./ChatHistory1/ChatHistory1";
import WriteMessage from "../WriteMessage/WriteMessage";

let chatHistory = state.messages_page.messages[0].history.map(chat => <ChatHistory1 from_001={chat.from_001} from_002={chat.from_002}
                                                                      from_003={chat.from_003} to_001={chat.to_001}
                                                                      to_002={chat.to_002} to_003={chat.to_003}/>)

const Chat1 = (props) => {
  return (
      <div>
          {chatHistory}
          <WriteMessage forWriteMessage={props.forChat1}/>
      </div>
  )
}

export default Chat1