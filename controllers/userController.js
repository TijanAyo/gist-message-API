const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authenticate_user = async (req, res)=>{
    const {name, email , password } = req.body

    if(!name || !email || !password){
        res.status(400).json({
            error: 'No field was specified'
        })
    }

    // Hash Password
    const salt = bcrypt.genSalt(10)
    const hashed_password = await bcrypt.hash(password, salt)

    const user = User.create({
        name,
        email,
        password: hashed_password
    })

    if(user){
        res.status(200).json({
            message: 'Gisty Message Account Created 👍🏿'
        })
    }
    else{
        res.status(400).json({
            error: 'Invalid User Credential'
        })
    }
}

const authorize_user = (req, res)=>{
    res.json({
        message: 'Authorize user endpoint'
    })
}

module.exports = {
    authorize_user, authenticate_user
}