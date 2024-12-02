import { useEffect, useRef } from "react"
import useGetMessages from "../../../hooks/Chat/useGetMessages.js"
import Message from "./Message"
import useListenMessage from "../../../hooks/useListenMessage.js"

const Messages = () => {

    const { loading, messages } = useGetMessages()
    useListenMessage();
    //useRef allows you to directly access and manipulate DOM elements
    //or store mutable values without causing re-renders
    //It is particularly useful for managing focus, text selection, integrating 
    //with third-party libraries, and maintaining values across renders 
    //without affecting component updates.
    const lastMessageRef = useRef()

    
    useEffect(() => {
        if (messages.length != 0)
            setTimeout(() => {
                lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
            }, 100);
    }, [messages])

    return <div className="bg-light mt-2 mb-2 pt-4 pb-4 w-100 overflow-auto rounded"
        style={{ "scrollbarWidth": "none", "height": "430px" }} key={messages._id}>
        {messages.length > 0 && messages.map(message => (
            <div key={message._id}
                ref={lastMessageRef}
            > <Message key={message._id} message={message} />
            </div>
        ))}
        {!loading && messages.length === 0 && (
            <p className="text-center">Send a message to start conversation</p>
        )}
    </div>
}
export default Messages