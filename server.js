const express = require('express')


const app = express()

app.get('/',(req,res) => {
  res.status(200).json({
    success:true,
    message:"Server running Home page"
  })
})

app.listen(3000,() => {
    console.log('server listen on port no 3000');
    
})