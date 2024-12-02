// import { useSocketContext } from "../../context/SocketContext";
import useConversations from "../../../zustand/useConversations"
import { IoAdd } from "react-icons/io5";


const Receiver = ({ clicked }) => {
    const { selectedConversation } = useConversations()

    // const { onlineUsers } = useSocketContext();
    // const isOnline = onlineUsers.includes(selectedConversation?._id)
    return <div className="bg-light mt-2 d-flex justify-content-start align-items-center rounded"
        style={{ "height": "50px" }}>
        <div className="mt-1 mx-4 align-self-start " style={{ width: "auto", height: "100%" }}>
            <img src={selectedConversation?.avatar} className="avatar-img img-fluid" width={40} height={40} />
        </div>
        <h5 className="mt-2 text-success mx-4 w-75">{selectedConversation?.fullname.toUpperCase()}</h5>
        {clicked && <button
            className={`mx-auto rounded-circle border-0 bg-success d-flex align-items-center text-light cursor-pointer `}
            style={{ "width": "30px", "height": "30px" }}
        > <IoAdd fontSize={30} />
        </button>}
    </div>
}

export default Receiver