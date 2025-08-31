const mongoose = require('mongoose')

const signUpSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true,
        lowercase: true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum : ['user','admin','superAdmin'],
        default: 'user'
    }
},{timestamps:true})

const Account = mongoose.model('Account',signUpSchema)

module.exports = Account