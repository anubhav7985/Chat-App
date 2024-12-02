import { useState } from "react";
import MessageContainer from "./Messages/Chat/MessageContainer";
import GroupMessageContainer from "./Messages/Groups/Message/GroupMessageContainer";
import SideBar from "./SideBars/SideBar";

const Home = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return <div className="container row min-vw-100" style={{ scrollbarWidth: "none" }}>
        <SideBar
            clicked={clicked}
            handleClick={handleClick}
        />
        {clicked ? <GroupMessageContainer /> : <MessageContainer
            clicked={clicked}
            handleClick={handleClick}
        />}
    </div>
}

export default Home;