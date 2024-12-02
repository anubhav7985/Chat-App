import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/signup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const { loading, signup } = useSignup()
    const handleSubmit = (e) => {
        e.preventDefault();
        signup(inputs);
    }
    const handleGenderCheckBox = (gender) => {
        setInputs({ ...inputs, gender });
    }


    return <div className="d-flex align-items-center h-auto min-vw-50 w-75">
        <form className="container rounded-5 border border-5 p-3" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4 col-4 container-fluid text-center">
                <h1 className="fs-2 text-success">Sign Up</h1>
            </div>
            <div className="col-4 container-fluid">
                <label htmlFor="fullname" className="text-secondary mb-1">Full Name:</label>
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="form-control"
                    placeholder="Enter Full Name"
                    value={inputs.fullname}
                    onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                />
            </div>
            <div className="mt-3 col-4 container-fluid">
                <label htmlFor="username" className="text-secondary mb-1">User Name:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter User Name"
                    value={inputs.username}
                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                />
            </div>
            <div className="mt-3 col-4 container-fluid">
                <label htmlFor="password" className="text-secondary mb-1">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={inputs.password}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
            </div>
            <div className="mt-3 col-4 container-fluid">
                <label htmlFor="confirmPassword" className="text-secondary mb-1">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Please Confirm Password"
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                />
            </div>
            <GenderCheckBox onCheckboxChange={handleGenderCheckBox} selectedGender={inputs.gender} />
            <div className="mt-2 col-4 container-fluid">
                <Link to="/login" className=" text-success link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }}>
                    {"Already"} have an account?
                </Link>
            </div>
            <div className="mt-3 container col-4 rounded">
                <button type="submit" className="btn btn-success fs-5" style={{ "width": "100%", "height": "50px" }}>
                    Sign up
                </button>
            </div>

        </form>
    </div>
}

export default SignUp;