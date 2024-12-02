import { useState } from "react";
import Conversations from "./Chat/Conversations";
import GroupConversations from "./Groups/GroupConversations";
import LogOut from "./LogOut";
import SearchInput from "./SearchInput";
import { FaLayerGroup } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import CreateGroup from "./Groups/CreateGroup";


const SideBar = ({ clicked, handleClick }) => {
    const user = JSON.parse(localStorage.getItem("chat-user"))
    const [addGroup, setAddGroup] = useState(false)
    const handleGroup = () => {
        setAddGroup(!addGroup)
        console.log(addGroup)
    }
    return <div
        className="d-flex align-items-start flex-column gap-3 bg-light col-3 border-end overflow-hidden "
    >
        <div className="mt-3 p-2 border-bottom" style={{ "height": "12%" }}><SearchInput /></div>
        <div className="p-2">
            {!clicked ? <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 "
                onClick={handleClick}
            > <FaLayerGroup /> <span className="px-1">{!clicked ? "Groups" : "Chats"}</span>
            </button> : <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 "
                onClick={handleClick}
            > <FaPerson /> <span className="px-1">{!clicked ? "Groups" : "Chats"}</span>
            </button>}
        </div>
        <div className="p-2 mb-auto border-bottom" style={{ "scrollbarWidth": "none", "height": "360px" }}>
            <p>Welcome {user.username}</p>
            {clicked ? <>
                {!addGroup ? <GroupConversations
                    clicked={clicked}
                    onButtonClick={handleClick}
                    onAddGroup={handleGroup}
                /> : <CreateGroup
                    onAddGroup={handleGroup} />}
            </> : <Conversations
                clicked={clicked}
                onButtonClick={handleClick}
            />
            }
        </div>
        <div className="p-2 mb-2 "><LogOut /></div>
    </div>
}
export default SideBar;