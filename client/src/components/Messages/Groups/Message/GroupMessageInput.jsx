import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useGroupMessages from "../../../../hooks/Groups/useSendGroupMessage";

const GroupMessageInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendGroupMessage } = useGroupMessages()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!message)
            return
        sendGroupMessage(message)
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

export default GroupMessageInput;