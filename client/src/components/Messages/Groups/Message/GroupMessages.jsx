import { useEffect, useRef } from "react"
import GroupMessage from "./GroupMessage.jsx"
import useGroupMessages from "../../../../hooks/Groups/useGetGroupMessage.js"
import useListenMessage from "../../../../hooks/useListenMessage.js"

const GroupMessages = () => {

    const { loading, messages } = useGroupMessages()
    useListenMessage();
    const lastMessageRef = useRef()
    useEffect(() => {
        if (messages.length != 0)
            setTimeout(() => {
                lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
            }, 100);
    }, [messages])

    return <div className="bg-light mt-2 mb-2 pt-3 pb-4 w-100 overflow-auto rounded"
        style={{ "scrollbarWidth": "none", "height": "430px" }}>
        {messages.length > 0 && messages.map(message => (
            <div key={message._id}
                ref={lastMessageRef}
            ><GroupMessage message={message} />
            </div>
        ))}
        {messages.length === 0 && (
            <p className="text-center">Send a message to start conversation</p>
        )}
    </div>
}
export default GroupMessages