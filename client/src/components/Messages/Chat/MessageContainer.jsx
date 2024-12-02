import { useEffect } from "react";
import useConversations from "../../../zustand/useConversations";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import Receiver from "./Receiver";

const MessageContainer = ({ clicked, handleClick }) => {
    const { selectedConversation, setSelectedConversation } = useConversations();
    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation])
    let loading = false
    return <div className="bg-success col ">
        {!selectedConversation ? <NoChatSelected /> :
            <><Receiver
                clicked={clicked}
                handleClick={handleClick}
            />
                <Messages />
                <MessageInput />
            </>}
    </div>
}
export default MessageContainer;