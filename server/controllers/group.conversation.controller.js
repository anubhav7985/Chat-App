const GroupConversation = require('../models/groupConversation')
const GroupMessage = require('../models/groupMessages')
const User = require('../models/user')
const { io, getReceiverSocketId } = require("../socket/socket");

exports.getMembers = (req, res, next) => {
    const groupId = req.params.groupId
    GroupConversation.findById(groupId)
        .then(group => {
            const members = group.participants;
            return User.find({ _id: { $in: members } });
        }).then(user => {
            return res.status(201).json({
                members: user
            })
        }).catch(err => {
            res.status(500).json({ message: "Internal server error" })
        })
}

exports.getAddMembers = (req, res, next) => {
    const groupId = req.params.groupId
    GroupConversation.findById(groupId)
        .then(group => {
            const members = group.participants;
            return User.find({ _id: { $nin: members } });
        }).then(user => {
            return res.status(201).json({
                members: user
            })
        }).catch(err => {
            res.status(500).json({ message: "Internal server error" })
        })
}


exports.postAddMember = (req, res, next) => {
    const groupId = req.params.groupId
    const memberId = req.params.memberId

    GroupConversation.findById(groupId).then(group => {
        if (!group) {
            return res.status(200).json({ message: "No Group Exists" })
        }
        group.participants.push(memberId)
        group.save()
        res.status(200).json({
            group,
            message: "Member Added in Group"
        })
    }).catch(err => {
        res.status(500).json({ message: "Internal server error" })
    })
}

exports.postRemoveMember = (req, res, next) => {
    const groupId = req.params.groupId
    const memberId = req.body.memberId

    GroupConversation.findById(groupId).then(group => {
        group.participants = group.participants.filter(id => {
            return id !== Object(memberId)
        })
        group.save()
        res.status(200).json({
            participants: group.participants,
            message: "Member Removed in Group"
        })
    }).catch(err => {
        res.status(500).json({ message: "Internal server error" })
    })
}

exports.getGroups = (req, res, next) => {
    const userId = req.params.userId
    GroupConversation.find({ participants: { $in: [userId] } }).then(groups => {
        res.status(201).json({ groups })
    }).catch(err => {
        res.status(500).json({ message: "Internal server error" })
    })
}


exports.postCreateGroup = async (req, res, next) => {
    const adminId = req.params.adminId
    const groupname = req.body.groupname
    const avatar = req.body.avatar;

    const newGroupConversation = new GroupConversation({
        adminId,
        groupname,
        avatar
    })
    if (newGroupConversation) {
        newGroupConversation.participants.push(adminId)
    }
    await newGroupConversation.save().then(() => {
        res.status(201).json({ message: "Group created successfully" })
    }).catch(err => {
        res.status(500).json({ message: "Internal server error" })
    })
}

exports.postDeleteGroup = (req, res, next) => {
    const groupId = req.params.groupId
    GroupConversation.findOneAndDelete({_id: groupId}).then(() => {
        console.log("deleted")
        return res.status(201).json({ message: "Group deleted successfully" })
    }).catch(err => {
        res.status(501).json({ message: err.message })
    })
}

exports.getGroupMessages = async (req, res, next) => {
    const groupId = req.params.groupId;
    try {
        const group = await GroupConversation.findById(groupId);
        if (!group) {
            return res.status(404).json({ messages: "No group Found" });
        }

        const messageIds = group.messages;
        //Promise is an object used for managing asynchronous operations
        //Promise.all() -> If any of the promises reject, Promise.all() immediately 
        //rejects with the reason of the first rejected promise, and no other promise
        //are waited upon.
        const messages = await Promise.all(messageIds.map(async messageId => {
            const message = await GroupMessage.findById(messageId);
            const sender = await User.findById(message.senderId)

            return {
                _id: message._id,
                senderId: message.senderId,
                sendername: sender.username,
                message: message.message,
                avatar: sender.avatar,
                createdAt: message.createdAt
            };
        }));

        res.status(200).json({ messages });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.postAddMessage = (req, res, next) => {
    const groupId = req.params.groupId
    const message = req.body.message
    const senderId = req.params.senderId
    User.findById(senderId).then(user => {
        GroupConversation.findById(groupId).then(group => {
            const newMessage = new GroupMessage({
                user: JSON.stringify(user),
                senderId,
                groupId,
                message
            })
            newMessage.save()
            group.messages.push(newMessage);
            group.save()

            //socket io functionality
            const receiverSocketId = getReceiverSocketId(groupId)
            if (receiverSocketId) {
                //io.to(socket.id).emit() used to send events to specific client
                io.to(receiverSocketId).emit("newMessage", newMessage)
            }

            res.status(201).json({
                messages: newMessage,
                message: message
            })
        }).catch(err => {
            res.status(500).json({ message: "Internal server error" })
        })
    })
}