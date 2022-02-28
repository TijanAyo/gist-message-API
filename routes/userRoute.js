const express = require('express')
const router = express.Router()

const {authenticate_user, authorize_user } = require('../controllers/userController')

// @desc: Authenticate User 
// @route: POST /api/v1/register
router.post('/user/register', authenticate_user)

// @desc: Authorize User 
// @route: POST /api/v1/login
router.post('/user/login', authorize_user)

module.exports = router