import React from "react";
import state from '../../../../state';
import ChatHistory from "../ChatHistory/ChatHistory";
import WriteMessage from "../WriteMessage/WriteMessage";

let chatHistory = state.messages_page.messages[0].history.map(chat => <ChatHistory from_001={chat.from_001} from_002={chat.from_002}
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