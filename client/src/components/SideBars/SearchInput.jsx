import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";
import useGetConversations from "../../hooks/Chat/useGetConversation";
import useConversations from "../../zustand/useConversations";
const SearchInput = () => {
    const [search, setSearch] = useState("")
    const { setSelectedConversation } = useConversations()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search)
            return
        if (search.length < 3)
            return toast.error("Search term must be at least 3 characters long")

        const conversation = conversations.find(c => c.username.toLowerCase().includes(search.toLowerCase()))
        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("")
        } else {
            toast.error("No user Found")
        }
    }
    return <form
        className=" d-flex align-items-center justify-content-center"
        onSubmit={handleSubmit}
    >
        <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-5 border-1 opacity-50 px-2"
            style={{ "height": "40px" }}
        />
        <button type="submit" className="mx-2 bg-success text-white border-1 rounded-circle" style={{
            "width": "40px",
            "height": "40px",
            "textAlign": "top",
            "fontSize": "20px"
        }}>
            <CiSearch fontSize={25} />
        </button>
    </form>
}
export default SearchInput;