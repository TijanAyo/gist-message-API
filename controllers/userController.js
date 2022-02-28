const authenticate_user = (req, res)=>{
    res.json({
        message: 'REGISTER endpoint'
    })
}

const authorize_user = (req, res)=>{
    res.json({
        message: 'Authorize user endpoint'
    })
}

module.exports = {
    authorize_user, authenticate_user
}