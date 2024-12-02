import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext()

    const login = (inputs) => {
        const userName = inputs.userName
        const password = inputs.password
        //handleInputError() suggests that it is used to manage or handle errors 
        //that occur when there is invalid input from a user,
        const success = handleInputErrors({ userName, password });
        if (!success)
            return;
        setLoading(true);
        
        //fetch() function is used to make HTTP requests to a server
        fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: userName, password})
        }).then((res) => {
            return res.json()
        }).then(resData => {
            localStorage.setItem("chat-user", JSON.stringify(resData))
            setAuthUser(resData)
            console.log(resData)
        }).catch(err => {
            toast.error(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }
    return { loading, login }
}

export default useLogin

const handleInputErrors = ({ userName, password}) => {
    if (!userName || !password ) {
        toast.error("Please fill all the fields")
        return false
    }
    if (password.length < 6) {
        toast.error("Password must be min of length 6")
        return false;
    }
    return true;
}