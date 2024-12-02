import { BsSend } from "react-icons/bs";
import useMessages from "../../../hooks/Chat/useSendMessages";
import { useState } from "react";

const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useMessages()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!message)
            return
        sendMessage(message)
        setMessage("")
    }
    return <form
        className="bg-light rounded d-flex justify-content-center p-2"
        onSubmit={handleSubmit}>
        <textarea
            type="text"
            placeholder="Send a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-4 border-1 px-3 w-50"
            style={{
                "minHeight": "30px",
                "scrollbarWidth": "none",
            }} />
        <button type="submit" className="mt-1 mx-3 bg-success text-white border-1 rounded-circle"
            style={{
                "width": "40px",
                "height": "40px",
                "textAlign": "top",
                "fontSize": "20px"
            }}>
            <BsSend />
        </button>
    </form>
}

export default MessageInput;