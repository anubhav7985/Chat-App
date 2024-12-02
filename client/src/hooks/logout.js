import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const { authUser, setAuthUser } = useAuthContext()

    const logout = () => {

        setLoading(true)
        fetch("http://localhost:8000/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${authUser.token}`
            }
        }).then(res => {
            return res.json()
        }).then(resData => {
            localStorage.removeItem("chat-user");
            setAuthUser(null)
        }).catch(err => {
            toast.error(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }
    return { loading, logout };
}

export default useLogout;