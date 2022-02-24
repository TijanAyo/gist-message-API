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

const messages = (req, res)=>{
    res.json({
        message: 'Display all gisty messages here'
    })
}


const create_message = (req, res)=>{
    res.json({
        message: 'Create your gisty messages here'
    })
}

const update_message = (req, res)=>{
    res.json({
        message: 'update your gisty messages here'
    })
}

const delete_message = (req, res)=>{
    res.json({
        message: 'delete your gisty messages here'
    })
}

module.exports = {
    status, welcome, messages, create_message, update_message, delete_message
}