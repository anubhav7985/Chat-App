import { Link } from "react-router-dom";
import useLogin from "../../hooks/login";
import { useState } from "react";

const Login = () => {
    const [userName,setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {loading, login} = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault();
        login({userName, password})
    }


    return <div className=" d-flex align-items-center h-auto" style={{"width": "60%"}}>
        <form className="container rounded-5 border border-3 p-4" onSubmit={handleSubmit}>
            <div className="mb-4 text-center">
                <h1 className="fs-2 text-success">Login</h1>
            </div>
            <div className="col-4 container-fluid">
                <label htmlFor="name" className="mb-2">User Name:</label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-control"
                    placeholder="Enter User Name"
                />
            </div>
            <div className="col-4 container-fluid">
                <label htmlFor="email" className="mt-4">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter Password "
                />
            </div>
            <div className="mt-3 col-4 container-fluid">
                <Link to="/signup" className="text-success link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }}>
                    {"Don't"} have an account?
                </Link>
            </div>
            <div className="mt-4 container col-4 rounded">
                <button type="submit" className="btn btn-success fs-5" style={{ "width": "100%", "height": "50px" }}>Sign in</button>
            </div>
        </form>
    </div>
}

export default Login;