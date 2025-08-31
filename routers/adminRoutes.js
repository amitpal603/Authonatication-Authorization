const express = require('express');
const router = express.Router();
const adminAuthorization = require('../middleware/admin-autho')
const UserAutho = require('../middleware/user-autho')

router.get('/admin',UserAutho,adminAuthorization,(req,res) => {
    res.status(200).json({
        success:true,
        message:'Admin page visit admin panel '
    })
})

module.exports = router