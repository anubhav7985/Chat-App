const Conversation = require("../models/conversations");
const Message = require('../models/messages');
const { getReceiverSocketId, io } = require("../socket/socket");

exports.sendMessage = (req, res, next) => {
    const message = req.body.message
    const senderId = req.params.senderId
    const receiverId = req.params.receiverId

    Conversation.findOne({ participants: { $all: [senderId, receiverId]}})
        .then(async conversation => {
            if (!conversation) {
                conversation = Conversation.create({
                    participants: [senderId, receiverId],
                })
            }
            const newMessage = new Message({
                senderId,
                receiverId,
                message
            })
            if (newMessage) {
                conversation.messages.push(newMessage._id);
            }
            await conversation.save();
            await newMessage.save();

            //socket io functionality
            const receiverSocketId = getReceiverSocketId(receiverId)
            if(receiverSocketId) {
                //io.to(socket.id).emit() used to send events to specific slient
                io.to(receiverSocketId).emit("newMessage", newMessage)
            }
            res.status(201).json({
                conversation: conversation,
                senderId: senderId,
                receiverId: receiverId,
                message: message
            });
        });
}


exports.getMessages = (req, res, next) => {
    const receiverId = req.params.receiverId
    const senderId = req.params.senderId

    //populate() -> used to replace document references with the actual referenced data
    //used to automatically replace these references with the actual documents.
    Conversation.findOne({participants: {$all: [senderId, receiverId]}}).populate("messages")
        .then(conversation => {
            return res.status(200).json(conversation.messages)
        }).catch(err => {
            console.log(err)
        })

}