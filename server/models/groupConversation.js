const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupConversation = new Schema ({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    groupname: {
        type: String,
        required: true
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'GroupMessages',   
            default: []
        }
    ],
    avatar: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('GroupConversation', groupConversation)