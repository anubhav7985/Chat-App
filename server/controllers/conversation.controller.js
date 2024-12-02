const Conversations = require("../models/conversations")

exports.postConversation = (req, res, next) => {
    const senderId = req.params.senderId
    const receiverId = req.params.receiverId

    Conversations.findOne({ participants: { $all: [senderId, receiverId] } })
        .then((conversation) => {
            if(conversation){
                return res.status(200).json({message: "Conversation already exist"})
            } 
            const newConversation = new Conversations({
                participants: [senderId, receiverId],
            })
            newConversation.save();
            res.status(201).json({ message: "Conversation created successfully" })
        }).catch((err)=> {
            res.status(500).json({ message: err.message })
        })
}