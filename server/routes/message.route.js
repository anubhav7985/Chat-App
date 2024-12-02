const express = require('express')

const router = express.Router()
const messageController = require('../controllers/message.controller')

router.get('/:senderId?/:receiverId', messageController.getMessages)
router.post('/send/:senderId?/:receiverId', messageController.sendMessage)

module.exports = router