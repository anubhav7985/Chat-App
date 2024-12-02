import { GoPlus } from "react-icons/go"
import { MdOutlineCancel } from "react-icons/md";
import GetMembers from "./GetMembers"
import useConversations from "../../../../zustand/useConversations";

const GroupMember = ({ handleMember, handleAdd }) => {

    const user = JSON.parse(localStorage.getItem("chat-user"))
    const { selectedGroup } = useConversations()

    const isAdmin = selectedGroup.adminId !== user._id


    return <div className="bg-light rounded-4 mt-2 mb-2 pt-4 w-100 d-flex justify-content-center"
        style={{ "height": "430px" }}>
        <div className="card rounded-4" style={{ "width": "35%", "height": "95%" }}>
            <div className="card-header d-flex justify-content-between">
                <p >Group member</p>
                <button className="rounded-circle border-0 bg-success d-flex justify-content-center align-items-center text-light cursor-pointer "
                    style={{ "width": "30px", "height": "30px" }}
                    onClick={handleMember}><MdOutlineCancel /></button>
            </div>
            <GetMembers />
            <div className={`border-top rounded-4 d-flex justify-content-center align-items-center ${isAdmin && 'd-none'}`} style={{ height: "50px" }}>
                <button className="btn btn-secondary opacity-75 w-50 h-75 text-center rounded-3"
                    onClick={handleAdd}>
                    <GoPlus /> <span className="mx-1">Added</span>
                </button>
            </div>
        </div>
    </div>
}

export default GroupMember