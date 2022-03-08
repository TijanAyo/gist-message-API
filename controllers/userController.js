const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authenticate_user = async (req, res) =>{
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
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = User.create({
        name,
        email,
        password: hashedPassword
    })

    // Condition if user is created
    if(user) res.status(201).json({message: `${name} Created 👍🏿`, token: generateToken(user.id)})
    return res.status(400).send({error: "Invalid User Data"})
}

const authorize_user = async (req, res)=>{
    const {email, password} = req.body

    if (!email || !password){
        res.status(400).send({error: "No field was populated"})
    }

    // Checking for the user and compare passwd with hashed passwd in DB
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) res.json({message: `${user.name} is logged in ok`})
    return res.status(400).send({error: 'Invalid Credentials'})
}

// Generating Token(JWT)
const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '14d',
    })
}

module.exports = {
    authorize_user, authenticate_user
}