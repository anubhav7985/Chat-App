import { useState, useEffect } from 'react';
import useConversations from '../../zustand/useConversations';
import toast from 'react-hot-toast';
import axios from 'axios';


const useGroupMessages = () => {
    const [loading, setLoading] = useState(false);
    const { selectedGroup } = useConversations();
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const getGroupMessages = async () => {
            if (!selectedGroup?._id) return;
            setLoading(true);
            try {
                await axios.get(`http://localhost:8000/api/groups/getMessages/${selectedGroup?._id}`)
                    .then(message => {
                        setMessages(message.data.messages);
                    });
            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        };
        getGroupMessages();
    }, [selectedGroup?._id, setMessages, messages])
    return { loading, messages };
};

export default useGroupMessages;