import React from "react";
import state from '../../../../state';
import WriteMessage from "../WriteMessage/WriteMessage";
import ChatHistory from "../ChatHistory/ChatHistory";

let chatHistory3 = state.messages_page.messages[2].history.map(chat => <ChatHistory from_001={chat.from_001} from_002={chat.from_002}
                                                                                    from_003={chat.from_003} to_001={chat.to_001}
                                                                                    to_002={chat.to_002} to_003={chat.to_003}/>)

const Chat3 = (props) => {
    return (
        <div>
            {chatHistory3}
            <WriteMessage forWriteMessage={props.forChat3}/>
        </div>
    )
}

export default Chat3