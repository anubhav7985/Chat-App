// import { useSocketContext } from "../../context/SocketContext";
import { IoAdd } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import useConversations from "../../../zustand/useConversations";
import { useState } from "react";
import useDeleteGroup from "../../../hooks/Groups/useDeleteGroup";
import { useNavigate } from "react-router-dom";

const Receiver = ({ addMember, member, handleMember, handleAddMember }) => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("chat-user"))
    const { selectedGroup } = useConversations()
    const {loading, deleteGroup} = useDeleteGroup()

    const isAdmin = selectedGroup.adminId !== user._id

    // const { onlineUsers } = useSocketContext();
    // const isOnline = onlineUsers.includes(selectedConversation?._id)

    const handleDeleteGroup = () => {
        // deleteGroup();
        navigate("/")
    }

    return <div className="bg-light mt-2 d-flex justify-content-start align-items-center rounded"
        style={{ "height": "50px" }}>
        <div className="mt-1 mx-4 align-self-start " style={{ width: "auto", height: "100%" }}>
            <img src={selectedGroup?.avatar} className="avatar-img img-fluid" width={40} height={40} />
        </div>
        <div className="mt-1 mx-4 w-75">
            <button className="bg-light text-decoration-underline mb-2 fs-5 text-success border-0" disabled={addMember}
                onClick={handleMember}>{selectedGroup?.groupname}</button></div>
        {selectedGroup && <button
            className={`mx-4 rounded-circle border-0 bg-success d-flex align-items-center text-light cursor-pointer 
                ${isAdmin && 'd-none'}`}
            style={{ "width": "30px", "height": "30px" }}
            disabled={member}
            onClick={handleAddMember}
        > <IoAdd fontSize={30} />
        </button>}
        <button
            className={`mx-4 rounded-circle border-0 bg-success d-flex align-items-center text-light cursor-pointer 
                ${isAdmin && 'd-none'}`}
            style={{ "width": "30px", "height": "30px" }}
            onClick={handleDeleteGroup}
        > <RiDeleteBin5Line fontSize={30} />
        </button>
    </div>
}

export default Receiver