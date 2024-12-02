import { MdOutlineCancel } from "react-icons/md";
import GroupConversation from "./GroupConversation"
import useGetGroups from "../../../hooks/Groups/useGetGroups";
import { FaPerson } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";



const GroupConversations = ({ onSetSelect, onButtonClick, onAddGroup }) => {
    const { groups } = useGetGroups()

    return <div className="conversations border border-2 rounded-4">
        <div className="border-bottom m-2 pb-2 d-flex justify-content-between align-items-center"
            style={{ width: "230px" }}>
            <span>Groups</span>
            <button
                className={` rounded-circle border-0 bg-success d-flex align-items-center text-light cursor-pointer `}
                style={{ width: "35px", height: "35px" }}
                onClick={onButtonClick}
            >
                <FaPerson fontSize={28} />
            </button>
        </div>
        {groups.length > 0 && <div className="overflow-auto border-bottom border-2 rounded-4 " style={{ "scrollbarWidth": "none", "height": "200px" }}>
            {groups.map((group) => (<GroupConversation
                key={group._id}
                group={group}
                onSetSelect = {onSetSelect}
            />)

            )}
        </div>}
        <div className="d-flex justify-content-center align-items-center" style={{ height: "50px" }}>

            <button className="btn btn-secondary opacity-75 w-75 h-75 text-center"
                onClick={onAddGroup}
            >
                <GoPlus /> <span className="mx-1">Create Group</span>
            </button>
        </div>
    </div>
}
export default GroupConversations;