import useConversations from "../../../../zustand/useConversations";
// import {useSocketContext} from '../../context/SocketContext'

const AddMember = ({ member }) => {
    const { selectedAddMember, setSelectedAddMember } = useConversations()
    const isSelected = selectedAddMember?._id === member?._id

    // const {onlineUsers} = useSocketContext();
    // const isOnline = onlineUsers.includes(conversation?._id)

    const handleSelect = () => {
        if (isSelected)
            setSelectedAddMember(null)
        else
            setSelectedAddMember(member)
    }
    return <div className={`d-flex justify-content-lg-between align-items-center mx-1 mb-3 cursor-pointer border rounded-4 
            ${isSelected ? "bg-success text-light" : ""}`}
        onClick={handleSelect}
        style={{ "width": "95%", opacity: "hover:25" }} key={member._id}>
        <div className="avatar p-1 " style={{ "width": "20%", "height": "20%" }}>
            <img src={member.avatar} className="avatar-img img-fluid" />
        </div>
        <div>
            <h6 className={`${isSelected ? "text-light" : "text-success"}`} >{member.fullname}</h6>
        </div>
        <div className={`rounded-circle mx-4 bg-none`} style={{ "width": "7px", "height": "7px" }}></div>
    </div>

}
export default AddMember;