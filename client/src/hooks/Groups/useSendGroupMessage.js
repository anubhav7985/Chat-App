import { useState } from "react"
import useConversations from "../../zustand/useConversations"
import toast from "react-hot-toast"
import axios from "axios"

const useGroupMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedGroup } = useConversations()

    const sendGroupMessage = (message) => {
        const sender = JSON.parse(localStorage.getItem("chat-user"));
        setLoading(true)
        axios.post(`http://localhost:8000/api/groups/addMessage/${selectedGroup._id}/${sender._id}`, {
            message: message
        }).then(res => {
            if (res.error)
                throw new Error(res.error)
            setMessages([...messages, res.message])
        }).catch(err => toast.error(err.message)).finally(() => {
            setLoading(false)
        })
    }
    return { loading, sendGroupMessage }
}

export default useGroupMessages