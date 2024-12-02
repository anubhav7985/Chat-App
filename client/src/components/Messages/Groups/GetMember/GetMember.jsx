import { MdOutlineCancel } from "react-icons/md";
import useConversations from "../../../../zustand/useConversations";
// import {useSocketContext} from '../../context/SocketContext'

const GetMember = ({ member }) => {
    const user = JSON.parse(localStorage.getItem("chat-user"))
    const { selectedGroup } = useConversations()

    let isAdmin = true;
    if( selectedGroup.adminId === user._id) {
        if(selectedGroup.adminId !== member._id)
            isAdmin = false;
    }

    // const {onlineUsers} = useSocketContext();
    // const isOnline = onlineUsers.includes(conversation?._id)
    const handleClick = () => {
         console.log("Clicked")
    }
    return <div className={`d-flex justify-content-start align-items-center mx-1 mb-3 cursor-pointer border rounded-4 `}

        style={{ "width": "95%", opacity: "hover:25" }} key={member._id}>
        <div className="avatar p-1 " style={{ "width": "20%", "height": "20%" }}>
            <img src={member.avatar} className="avatar-img img-fluid" />
        </div>
        <div className="w-50 mx-4">
            <h6 className= "text-success" >{member.fullname}</h6>
        </div>
        <div className={`rounded-circle mb-2 mx-4 ${isAdmin && 'd-none'}`} style={{ "width": "20px", "height": "20px" }}
        onClick={handleClick}>
            <MdOutlineCancel />
        </div>
    </div>

}
export default GetMember;