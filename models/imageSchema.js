const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    publicId:{
        type: String,
        required:true
    },
    uploadedBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Account'
    }
},{timestamps:true})

module.exports = mongoose.model('Image',imageSchema)