const express = require('express')
const router = express.Router();

const groupConversationController = require('../controllers/group.conversation.controller')

router.get('/getGroups/:userId', groupConversationController.getGroups);
router.post('/add/:adminId', groupConversationController.postCreateGroup);
router.post('/delete', groupConversationController.postDeleteGroup);


router.post('/addMember/:groupId/:memberId', groupConversationController.postAddMember)
router.post('/removeMember/:groupId', groupConversationController.postRemoveMember)


router.get('/getMessages/:groupId', groupConversationController.getGroupMessages)
router.post('/addMessage/:groupId/:senderId', groupConversationController.postAddMessage)


router.get('/getMembers/:groupId', groupConversationController.getMembers)
router.get('/getAddMembers/:groupId', groupConversationController.getAddMembers)

module.exports = router