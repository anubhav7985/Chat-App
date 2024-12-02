import { useEffect, useState } from "react"
import axios from 'axios'
import toast from "react-hot-toast"
const useGetGroups = () => {
    const [loading, setLoading] = useState(false)
    const [groups,setGroups] = useState([])

    useEffect(()=> {
        const getGroups = () => {
            setLoading(true)
            const userId = JSON.parse(localStorage.getItem("chat-user"))
            axios.get(`http://localhost:8000/api/groups/getGroups/${userId?._id}`)
            .then(res => {
                setGroups(res.data.groups)
            }).catch(err => toast.error(err.message)).finally(()=> {
                setLoading(false)
            })  
        }
        getGroups()
    },[])
    return {loading, groups}
}

export default useGetGroups