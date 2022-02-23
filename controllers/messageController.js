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


module.exports = {
    status, welcome
}