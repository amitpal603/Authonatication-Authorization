const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()
const userRouters = require('./routers/userRouters')
const userRoutes = require('./routers/userRoutes')
const adminRoutes = require('./routers/adminRoutes')


const app = express()
app.use(express.json())
app.use('/account',userRouters)
app.use('/authoUser',userRoutes)
app.use('/authoAdmin',adminRoutes)
connectDB()

app.get('/',(req,res) => {
  res.status(200).json({
    success:true,
    message:"Server running Home page"
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`server listen on port no ${PORT}`);
})