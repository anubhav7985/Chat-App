import { useEffect, useState } from "react"
import useConversations from "../../zustand/useConversations"
import axios from 'axios'
import toast from "react-hot-toast"

const useGetGroupMember = () => {

    const [loading, setLoading] = useState(false)
    const [members, setMembers] = useState([])

    const { selectedGroup } = useConversations()

    useEffect(() => {
        const getMembers = () => {
            setLoading(true)

            //axios.get method is used to make HTTP GET requests to retrieve data from a server
            axios.get(`http://localhost:8000/api/groups/getMembers/${selectedGroup?._id}`).then(res => {
                return res.data
            }).then(resData => {
                console.log("Res", resData)
                setMembers(resData.members)
            }).catch(err => {
                toast.error(err.message)
            }).finally(() => {
                setLoading(false)
            })
        }
        getMembers()
    }, [selectedGroup?._id, setMembers])

    return { loading, members }
}

export default useGetGroupMember