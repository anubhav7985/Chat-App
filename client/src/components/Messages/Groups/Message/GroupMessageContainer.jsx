import { useEffect, useState } from "react";
import useConversations from "../../../../zustand/useConversations";
import GroupMessageInput from "./GroupMessageInput";
import GroupNoChatSelected from "../GroupNoChatSelected";
import GroupReceiver from "../GroupReceiver";
import GroupMessages from "./GroupMessages";
import GroupAddMember from "../AddMember/GroupAddMember";
import GroupMember from "../GetMember/GroupMember";
import useAddGroupMember from "../../../../hooks/Groups/useAddGroupMember";
// import useGetGroupAdmin from "../../../hooks/Groups/useGetGroupAdmin";

const GroupMessageContainer = () => {
    const [member, setMember] = useState(false)
    const [addMember, setAddMember] = useState(false)
    const { setSelectedAddMember,selectedGroup, setSelectedGroup } = useConversations();
    const { loading, addGroupMember } = useAddGroupMember()

    
    useEffect(() => {
        return () => setSelectedGroup(null);
    }, [setSelectedGroup])

    const handleMember = () => {
        setMember(!member)
        console.log("mem", member)
    }
    const handleAddMember = () => {
        setAddMember(!addMember)
        console.log("add->", addMember)
    }
    const handleAdd = () => {
        setAddMember(!addMember)
        setMember(!member)
    }
    const handleAddGroupMember = () => {
        addGroupMember()
        setSelectedAddMember(null)
        setAddMember(!addMember)
    }
    return <div className="bg-success col ">
        {!selectedGroup ? <GroupNoChatSelected /> : <>
            <GroupReceiver
                member={member}
                addMember={addMember}
                handleMember={handleMember}
                handleAddMember={handleAddMember}
            />
            {!member && !addMember ? <>
                <GroupMessages />
                <GroupMessageInput />
            </> : <>
                {addMember && <GroupAddMember
                    handleAddMember={handleAddMember}
                    handleAddGroupMember={handleAddGroupMember}
                />}
                {member && <GroupMember
                    handleAdd={handleAdd}
                    handleMember={handleMember}
                />}
            </>
            }
        </>}
    </div>
}
export default GroupMessageContainer;