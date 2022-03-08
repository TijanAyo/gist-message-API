const User = require('../models/user')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) =>{
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            // Get token from Header
            token = req.headers.authorization.split(' ')[1]

            // Verify the Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        }
        catch(error){
            console.log(error)
            res.status(401).send({
                error: "Not Authorized "
            })
        }
    }

    if (!token){
        res.status(401).send({
            error: 'Not Authorized, No Token'
        })
    }
}

module.exports = {
    auth
}