import { create } from "zustand";

const useConversations = create((set) => ({
    selectedAddMember: null,
    setSelectedAddMember: (selectedAddMember) => set({ selectedAddMember }),
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    selectedGroup: [],
    setSelectedGroup: (selectedGroup) => set({ selectedGroup }),
    messages: [],
    setMessages: (messages) => set({ messages })
}))

export default useConversations 