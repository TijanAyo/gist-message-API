const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    // @desc: Your patners name
    name : {
        type: String,
        required: [true, 'Please add a value']
    },
    // @desc: Your special message 😜😜
    message: {
        type: [String],
        required: [true, 'Please add a value']
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('gistymessage', messageSchema)