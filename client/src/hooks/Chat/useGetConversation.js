import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])


    useEffect(() => {
        const getConversations = () => {
            setLoading(true)
            const userId = JSON.parse(localStorage.getItem("chat-user"))
            axios.get(`http://localhost:8000/api/users/${userId?._id}`, {
                headers: {
                    authorization: `Bearer ${authUser.token}`
                }
            }

            ).then(res => {
                return res.data
            }).then(resData => {
                setConversations(resData)
            }).catch(err => {
                toast.error(err.message)
            }).finally(() => {
                setLoading(false)
            })
        }
        getConversations();
    }, [])
    return { loading, conversations }
}

export default useGetConversations