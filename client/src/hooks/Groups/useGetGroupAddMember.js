import { useEffect, useState } from "react"
import useConversations from "../../zustand/useConversations"
import axios from 'axios'
import toast from "react-hot-toast"

const useGetGroupAddMember = () => {

    const [loading, setLoading] = useState(false)
    const [members, setMembers] = useState([])

    const { selectedGroup } = useConversations()

    useEffect(() => {
        const getAddMembers = () => {
            setLoading(true)
            axios.get(`http://localhost:8000/api/groups/getAddMembers/${selectedGroup?._id}`).then(res => {
                return res.data
            }).then(resData => {
                setMembers(resData.members)
            }).catch(err => {
                toast.error(err.message)
            }).finally(() => {
                setLoading(false)
            })
        }
        getAddMembers()
    }, [selectedGroup?._id, setMembers])

    return { loading, members }
}

export default useGetGroupAddMember