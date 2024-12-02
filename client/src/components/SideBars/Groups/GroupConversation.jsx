import useConversations from "../../../zustand/useConversations"
// import {useSocketContext} from '../../context/SocketContext'

const GroupConversation = ({ group, onSetSelect }) => {

    const { selectedGroup, setSelectedGroup } = useConversations();
    const isSelected = selectedGroup?._id === group?._id

    // const {onlineUsers} = useSocketContext();
    // const isOnline = onlineUsers.includes(conversation?._id)

    const handleSelect = () => {
        if (isSelected) 
            setSelectedGroup(null)
        else 
            setSelectedGroup(group)
    }
    return <div className={`d-flex justify-content-between align-items-center mx-1 mb-3 cursor-pointer border rounded-4 
            ${isSelected ? "bg-success text-light" : ""}`}
        onClick={handleSelect}
        style={{ "width": "95%", opacity: "hover:25" }} key={group._id}>
        <div className="avatar p-1 " style={{ "width": "20%", "height": "20%" }}>
            <img src={group.avatar} className="avatar-img img-fluid" />
        </div>
        <div>
            <h6 className={`pt-1 ${isSelected ? "text-light" : "text-success"}`} >{group.groupname}</h6>
        </div>
        <div className={`rounded-circle mx-4 bg-none`} style={{ "width": "7px", "height": "7px" }}></div>
    </div>

}
export default GroupConversation;