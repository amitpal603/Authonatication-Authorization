const express = require('express');
const router = express.Router();
const UserAutho = require('../middleware/user-autho')

router.get('/user',UserAutho,(req,res) => {
    res.status(200).json({
        success: true,
        message:'You are logged in as user'
    })
})

module.exports = router