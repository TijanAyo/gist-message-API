const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authenticate_user = async (req, res)=>{
    const {name, email , password } = req.body

    if(!name || !email || !password){
        res.status(400).json({error: 'No field was specified'})
    }

    // checking if your exist
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400).send({error: `${email} is already being used`})
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
        res.status(200).send({message: 'Gisty User Created 👍🏿', token: user.id})
    }
    else{
        res.status(400).send({error: 'Invalid User Credential'})
    }
}

const authorize_user = async (req, res)=>{
    const {email, password} = req.body

    if (!email || !password){
        res.status(400).send({error: "No field was populated"})
    }


    res.json({message: 'Authorize user endpoint'})
}


// Generate JWT
const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '14d',
    })
}

module.exports = {
    authorize_user, authenticate_user
}