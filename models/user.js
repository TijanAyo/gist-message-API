const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please input a name"]
    },
    email: {
        type: String,
        required: [true, "Please input an email"]
    },
    password: {
        type: String,
        required: [true, "Please input a password"]
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('User', userSchema)