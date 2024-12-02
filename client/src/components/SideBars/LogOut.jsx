import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/logout";
const LogOut = () => {
    const {loading, logout} = useLogout()
    return <div className="d-flex mb-auto justify-content-left align-items-end cursor-pointer"
        onClickCapture={logout}
    >
         <CiLogout/> 
    </div>
}

export default LogOut