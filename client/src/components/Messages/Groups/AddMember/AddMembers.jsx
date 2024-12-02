import { MdOutlineCancel } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";
import AddMember from "./AddMember";
import useGetGroupAddMember from "../../../../hooks/Groups/useGetGroupAddMember";

const AddMembers = () => {
    const { members } = useGetGroupAddMember()
    return <div className="members mt-3">
        <div className="overflow-auto" style={{ "scrollbarWidth": "none", "height": "250px" }}>
            {members.length > 0 && members.map((member) => (<AddMember
                key={member._id}
                member={member}
            />)
            )}
            {members.length == 0 && <p>No member found</p>}
        </div>
    </div>
}
export default AddMembers