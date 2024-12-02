import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import useConversations from "../../zustand/useConversations"

const useDeleteGroup = (groupname) => {
    const [loading, setLoading] = useState(false)
    const {selectedGroup} = useConversations()
    const deleteGroup = () => {
        setLoading(true)
        axios.post(`http://localhost:8000/api/groups/delete/${selectedGroup?._id}`).then(res => {
            if (res.error)
                throw new Error(res.error)
        }).catch(err => {
            toast.error(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }
    return { loading, deleteGroup }
}

export default useDeleteGroup