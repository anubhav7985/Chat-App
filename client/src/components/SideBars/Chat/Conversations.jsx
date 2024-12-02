import { MdOutlineCancel } from "react-icons/md";
import Conversation from "./Conversation"
import useGetConversations from "../../../hooks/Chat/useGetConversation"
import { FaLayerGroup } from "react-icons/fa6";

const Conversations = ({ clicked, onButtonClick }) => {
    const { conversations } = useGetConversations()
    return <div className="conversations border border-2 rounded-4">
        <div className="border-bottom m-2 pb-2 d-flex justify-content-between align-items-center"
            style={{ width: "230px" }}>
            <span>Chats</span>
            <button
                className={` rounded-circle border-0 bg-success d-flex align-items-center text-light cursor-pointer `}
                style={{ width: "35px", height: "35px" }}
                onClick={onButtonClick}
            >
                <FaLayerGroup fontSize={28} />
            </button>
        </div>
        <div className="overflow-auto" style={{ "scrollbarWidth": "none", "height": "250px" }}>
            {conversations.map((conversation) => (<Conversation
                key={conversation._id}
                conversation={conversation}
            />)

            )}
        </div>
    </div>
}
export default Conversations;