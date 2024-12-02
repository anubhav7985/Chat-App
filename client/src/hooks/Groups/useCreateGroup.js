import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const useCreateGroup = (groupname) => {
    const [loading, setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem("chat-user"))
    const createGroup = (groupname) => {
        setLoading(true)
        axios.post(`http://localhost:8000/api/groups/add/${user._id}`, {
            groupname: groupname,
            avatar: `https://avatar.iran.liara.run/username?username=[${groupname}]`
        }).then(res => {
            if (res.error)
                throw new Error(res.error)
        }).catch(err => {
            toast.error(err.message)

        }).finally(() => {
            setLoading(false)
        })
    }
    return { loading, createGroup }
}

export default useCreateGroup