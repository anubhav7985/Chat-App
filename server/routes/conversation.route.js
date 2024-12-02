const express = require('express')
const router = express.Router()

const conversationController = require('../controllers/conversation.controller')

router.post('/create/:senderId/:receiverId', conversationController.postConversation )

module.exports = router