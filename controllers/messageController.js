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
    status
}