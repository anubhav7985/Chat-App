const express = require('express')
const router = express.Router();
const { protect } = require('../middleware/authmiddleware')
const userController = require('../controllers/user.controller')

router.get('/users/:userId', protect, userController.getUsers);

module.exports = router