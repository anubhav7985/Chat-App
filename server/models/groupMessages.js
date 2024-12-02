const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupMessages = new Schema({
    user: {
        type: String,
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'GroupConversaion',
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('GroupMessage', groupMessages)