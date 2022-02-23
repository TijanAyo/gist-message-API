const express = require('express')
const router = express.Router()

const { status, welcome  } = require('../controllers/messageController')

// @desc: Home
// @route: GET /
router.get('/', welcome)

// @desc: Checking status of API
// @route: GET /api/status
router.get('/api/status', status)


module.exports = router;