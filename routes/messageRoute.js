const express = require('express')
const router = express.Router()

const { status, welcome, messages, create_message, update_message, delete_message  } = require('../controllers/messageController')
const { auth } = require('../middleware/auth')

// @desc: Home
// @route: GET /
router.get('/', welcome)

// @desc: Checking status of API
// @route: GET /api/v1/status
router.get('/api/v1/status', status)

// @desc: Display all messages
// @route: GET /api/v1/messages
router.get('/api/v1/messages', messages)

// @desc: Create gisty messages
// @route: POST /api/v1/messages
router.post('/api/v1/messages', auth, create_message)

// @desc: Update messages
// @route: PATCH /api/v1/messages/:id
router.put('/api/v1/messages/:id', auth, update_message)

// @desc: Delete messages
// @route: Delete /api/v1/messages/:id
router.delete('/api/v1/messages/:id', auth, delete_message)


module.exports = router;