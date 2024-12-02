import { GoPlus } from "react-icons/go";
import useCreateGroup from "../../../hooks/Groups/useCreateGroup";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const CreateGroup = ({ onAddGroup }) => {
    const [groupname, setGroupname] = useState("")
    const { loading, createGroup } = useCreateGroup()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!groupname)
            return
        createGroup(groupname)
        setGroupname("")
    }


    return <div className="conversations border border-2 rounded-4 h-75">
        <div className="border-bottom m-2 pb-2 d-flex justify-content-between align-items-center"
            style={{ width: "230px" }}>
            <span>Create Group</span>
            <button className="rounded-circle border-0 bg-success d-flex justify-content-center align-items-center text-light cursor-pointer "
                style={{ "width": "30px", "height": "30px" }}
                onClick={onAddGroup}><MdOutlineCancel /></button>
        </div>
        <form
            className=" mt-5 mx-4 d-flex flex-column gap-3 justify-content-center align-items-center"
            style={{ height: "50px" }}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={groupname}
                onChange={(e) => setGroupname(e.target.value)}
                placeholder="Enter Group Name"
                className="form-control" />
            <button type="submit" className="btn btn-secondary opacity-75 text-center"
            ><GoPlus /> <span className="mx-1">Create</span>
            </button>
        </form>
    </div>
}
export default CreateGroup;