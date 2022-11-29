import React from "react";
import state from '../../../../state';
import WriteMessage from "../WriteMessage/WriteMessage";
import ChatHistory from "../ChatHistory/ChatHistory";

let chatHistory2 = state.messages_page.messages[1].history.map(chat => <ChatHistory from_001={chat.from_001} from_002={chat.from_002}
                                                                                    from_003={chat.from_003} to_001={chat.to_001}
                                                                                    to_002={chat.to_002} to_003={chat.to_003}/>)

const Chat2 = (props) => {
    return (
        <div>
            {chatHistory2}
            <WriteMessage forWriteMessage={props.forChat2}/>
        </div>
    )
}

export default Chat2