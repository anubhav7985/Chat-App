import { MdOutlineCancel } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";
import GetMember from "./GetMember";
import useGetGroupMember from "../../../../hooks/Groups/useGetGroupMember";

const GetMembers = () => {
    const { members } = useGetGroupMember()
    return <div className="members mt-3">
        <div className="overflow-auto " style={{ "scrollbarWidth": "none", "height": "250px" }}>
            {members.length > 0 && members.map((member) => (<GetMember
                key={member._id}
                member={member}
            />)
            )}
            {members.length == 0 && <p>No member found</p>}
        </div>
    </div>
}
export default GetMembers