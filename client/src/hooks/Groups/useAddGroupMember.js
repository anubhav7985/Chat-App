import { useState } from "react"
import useConversations from "../../zustand/useConversations"
import toast from "react-hot-toast"
import axios from "axios"

const useAddGroupMember = () => {
    const [loading, setLoading] = useState(false)
    const { selectedAddMember, selectedGroup } = useConversations()

    const addGroupMember = () => {
        setLoading(true)
        if(!selectedGroup || !selectedAddMember)
            return
        axios.post(`http://localhost:8000/api/groups/addMember/${selectedGroup._id}/${selectedAddMember._id}`).then(res => {
            if (res.error)
                throw new Error(res.error)
        }).catch(err => toast.error(err.message)).finally(() => {
            setLoading(false)
        })
    }
    return { loading, addGroupMember }
}

export default useAddGroupMember