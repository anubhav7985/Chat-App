import { SiImessage } from "react-icons/si";
import { MdOutlineWavingHand } from "react-icons/md";

const NoChatSelected = () => {
    // const sender = JSON.parse(localStorage.getItem("chat-user"))
    return <div className="d-flex flex-column justify-content-center align-items-center text-light"
    style={{ height: "100vh", width: "100%" }}>
        <div className="d-flex">
            <h3 className="text-light mx-3 ">Welcome james</h3>
            <MdOutlineWavingHand style={{ "width": "40px", "height": "40px" }} />
        </div>
        <h6 className="mt-4 mb-4">Select a chat to start messaging</h6>
        <SiImessage style={{ "width": "70px", "height": "70px" }} />
    </div>
}
export default NoChatSelected