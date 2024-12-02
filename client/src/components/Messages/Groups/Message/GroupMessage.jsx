
const GroupMessage = ({ message }) => {

    const sender = JSON.parse(localStorage.getItem("chat-user"));
    // const user = JSON.parse(message.user)
    const fromMe = sender._id === message.senderId;
    const fullname = fromMe ? "" : message.sendername
    const avatar = fromMe ? sender.avatar : message.avatar
    return <>
        <div className={`${fromMe ? "sender" : "receiver"}`}>
            <div className={`d-flex pt-2 justify-content-start align-items-end ${fromMe && "flex-row-reverse"}`} >
                <div className="avatar avatar-offline mx-2" style={{ "width": "30px", "height": "30px" }}>
                    <img src={avatar} className="avatar-img img-fluid" />
                </div>
                <div className={`border overflow-hidden ${fromMe ? "bg-success text-light" : "text-success"} `}
                    style={{ "minHeight": "50px", "maxWidth": "40%", "minWidth": "30%", "borderTopRightRadius": "20px", "borderBottomLeftRadius": "25px" }}>
                    {!fromMe && <div className="mx-1 px-1 text-primary-emphasis">{fullname}</div>}
                    <p className={`px-2 mb-auto ${!fromMe ? "mx-1 border-top" : ""}`} style={{ "borderTopRightRadius": "20px" }}>{message.message} </p>
                    <div className={`px-2 mb-auto d-flex justify-content-end align-items-end`}>
                        <p className="px-2 mb-auto " style={{ "fontSize": "15px", "borderTopRightRadius": "20px" }}>{extractTime(message.createdAt)}</p>
                    </div>
                </div>
            </div>
        </div>
    </>

}
export default GroupMessage

const extractTime = (dateString) => {
    const date = new Date(dateString)
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    return `${hours}:${minutes}`
}

const padZero = (number) => {
    return number.toString().padStart(2, "0");
}