import { useSocketContext } from "../../../context/SocketContext";
import useConversations from "../../../zustand/useConversations";


const Conversation = ({conversation}) => {

    const { selectedConversation, setSelectedConversation } = useConversations();
    const isSelected = selectedConversation?._id === conversation?._id

    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation?._id)

    return <div className={`d-flex justify-content-lg-between align-items-center mx-1 mb-3 cursor-pointer border rounded-4 
            ${isSelected? "bg-success text-light": ""}`}  
        onClick={() => setSelectedConversation(conversation)} 
        style={{"width": "95%", opacity: "hover:25" }} key={conversation._id}>
        <div className="avatar p-1 " style={{"width": "20%", "height": "20%"}}>
            <img src={conversation.avatar} className="avatar-img img-fluid" />
        </div>
        <div>
            <h6 className={`${isSelected ?  "text-light" : "text-success"}`} >{conversation.fullname}</h6>
        </div>
        <div className={`rounded-circle mx-4 ${isOnline && "bg-success"}`} style={{"width": "7px", "height": "7px"}}></div>
    </div>

}
export default Conversation;