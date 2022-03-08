const Message = require('../models/message')
const User = require('../models/user')


const welcome = (req, res) =>{
    res.json({Message: 'Welcome 👋', Desc: 'For more details checkout the ReadMe section for this API'})
}

const status = (req, res)=>{

    if(!res.status==200) res.status(500).send({error: '😢 Somthing went wrong'})
    return res.status(200).send({message: "👍🏾"})
}

const messages = async (req, res)=>{
    const msg = await Message.find().sort('-createdAt')

    res.status(200).send({ohayō:'All Gisty Messages', msg})
}


const create_message = async (req, res)=>{
    if(!req.body.name || !req.body.message){
        res.status(400).send({error: "Required Field not specified"})
    }

    // const user = await User.findOne({email})

    const gisty_message = await Message.create({
        user: req.user.id,
        name: req.body.name,
        message: req.body.message,
    })

    res.status(200).json({from: `${req.user.name}`, gisty_message})
}

const update_message = async (req, res)=>{
    const msg = await Message.findById(req.params.id)

    if(!msg){
        res.status(404).json({
            error: `Gisty message with Id: ${req.params.id} doesn't exist 😕`
        })
    }

    const user = await Message.findById(req.user.id)

    // Check if this user is authorized to make an update
    if(!user){
        res.status(401).send({error: "This user isn't authorized to make this update"})
    }

    // Making sure the logged in user is the same user that made the goal
    if(msg.user.toString() !== user.id){
        res.status(401).send({error: "User not authorized"})
    }

    const updated_msg = await Message.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(update_message)
}

const delete_message = async (req, res)=>{
    const msg = await Message.findById(req.params.id)

    if(!msg){
        res.status(404).json({error: `Gisty message with Id: ${req.params.id} doesn't exist 😕`})
    }

    const user = await Message.findById(req.user.id)

    // Check if this user is authorized to remove
    if(!user){
        res.status(401).send({error: "This user isn't authorized to make this removal"})
    }

    // Making sure the logged in user is the same user that wants to make the removal
    if(msg.user.toString() !== user.id){
        res.status(401).send({error: "User not authorized"})
    }

    await msg.remove();

    res.status(200).json({
        message: `Your gisty message with id: ${req.params.id} has been removed 👋`
    })
}

module.exports = {
    status, welcome, messages, create_message, update_message, delete_message
}