const  mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error in connecting to database',error.message);
    }
}
module.exports = connectDB