import { GoPlus } from "react-icons/go"
import AddMembers from "./AddMembers"
import { MdOutlineCancel } from "react-icons/md"
import useConversations from "../../../../zustand/useConversations"

const GroupAddMember = ({ handleAddMember, handleAddGroupMember }) => {
    const { selectedAddMember } = useConversations()

    return <div className="bg-light rounded-4 mt-2 mb-2 pt-4 w-100 d-flex justify-content-center"
        style={{ "height": "430px" }}>
        <div className="card rounded-4" style={{ "width": "35%", "height": "95%" }}>
            <div className="card-header d-flex justify-content-between">
                <p >Add member</p>
                <button className="rounded-circle border-0 bg-success d-flex justify-content-center align-items-center text-light cursor-pointer "
                    style={{ "width": "30px", "height": "30px" }}
                    onClick={handleAddMember}><MdOutlineCancel /></button>
            </div>
            <AddMembers />
            <div className="border-top rounded-4 mt-2 d-flex justify-content-center align-items-center" style={{ height: "50px" }}>
                <button className="btn btn-secondary opacity-75 w-50 h-75 text-center rounded-3"
                    disabled={selectedAddMember === null}
                    onClick={handleAddGroupMember}>
                    <GoPlus /> <span className="mx-1">Added</span>
                </button>
            </div>
        </div>
    </div>
}

export default GroupAddMember