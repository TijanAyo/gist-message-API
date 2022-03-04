const Message = require('../models/message')


const welcome = (req, res) =>{
    res.json({
        Message: 'Welcome 👋',
        Desc: 'For more details checkout the ReadMe section for this API'
    })
}
const status = (req, res)=>{
    if(!res.status == 200){
        res.status(500).json({
            error: '😢 Somthing went wrong'
        })
    }else{
        res.status(200).json({
            message: "👍🏾"
        })
    }
}

const messages = async (req, res)=>{
    const msg = await Message.find().sort('-createdAt')

    res.status(200).send(msg)
}


const create_message = async (req, res)=>{
    if(!req.body.name || !req.body.message){
        res.status(400).send({
            error: "Required Field not specified"
        })
    }
    const new_message = await Message.create({
        name: req.body.name,
        message: req.body.message
    })

    res.status(200).json(new_message)
}

const update_message = async (req, res)=>{
    const msg = await Message.findById(req.params.id)

    if(!msg){
        res.status(404).json({
            error: `Gisty message with Id: ${req.params.id} doesn't exist 😕`
        })
    }

    const updated_msg = await Message.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(update_message)
}

const delete_message = async (req, res)=>{
    const msg = await Message.findById(req.params.id)

    if(!msg){
        res.status(404).json({
            error: `Gisty message with Id: ${req.params.id} doesn't exist 😕`
        })
    }

    await msg.remove();

    res.status(200).json({
        message: `Your gisty message with id: ${req.params.id} has been removed 👋`
    })
}

module.exports = {
    status, welcome, messages, create_message, update_message, delete_message
}