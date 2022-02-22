const express = require('express')
const router = express.Router()

const { status } = require('../controllers/messageController')


// @desc: Checking status of API
// @route: GET /api/status
router.get('/api/status', status)


module.exports = router;