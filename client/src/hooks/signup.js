import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from 'axios'
const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext()

    const signup = async (inputs) => {
        const user = inputs;
        console.log("User", user);

        const success = handleInputErrors(user);
        if (!success)
            return;
        setLoading(true);

        //fetch() function is used to make HTTP requests to a server
        try {
            const { data } = await axios.post("http://localhost:8000/api/auth/signup", user)
            console.log("data", data);;

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }

        // fetch("http://localhost:8000/api/auth/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: user,
        // }).then((res) => {
        //     return res.json()
        // }).then(resData => {
        //     localStorage.setItem("chat-user", JSON.stringify(resData))
        //     setAuthUser(resData)
        //     console.log(resData)
        // }).catch(err => {
        //     toast.error(err.message)
        // }).finally(() => {
        //     setLoading(false)
        // })
    }
    return { loading, signup }
}

export default useSignup

const handleInputErrors = ({ fullname, username, password, confirmPassword, gender }) => {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill all the fields")
        return false
    }
    if (password !== confirmPassword) {
        toast.error("Password doesn't match")
        return false
    }
    if (password.length < 6) {
        toast.error("Password must be min of length 6")
        return false;
    }
    return true;
}