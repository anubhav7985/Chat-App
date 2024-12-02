import axios from "axios";
import { useEffect, useState } from "react";
import useConversations from "../../zustand/useConversations";
import toast from "react-hot-toast"

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState([])
    const { selectedConversation } = useConversations()

    useEffect(() => {
        const getMessages = async () => {
            const sender = JSON.parse(localStorage.getItem("chat-user"));
            const conversationId = selectedConversation?._id;

            if (!sender || !conversationId) {
                toast.error("Invalid sender or conversation ID");
                return;
            }
            setLoading(true);

            try {
                // Create a new conversation if it doesn't exist
                await axios.post(`http://localhost:8000/api/create/${sender._id}/${conversationId}`);

                // Fetch messages for the conversation
                const response = await axios.get(`http://localhost:8000/api/message/${sender._id}/${conversationId}`)

                setMessages(response.data);
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        };
        getMessages();
    }, [selectedConversation?._id, setMessages, messages])
    return { loading, messages }
}

export default useGetMessages;