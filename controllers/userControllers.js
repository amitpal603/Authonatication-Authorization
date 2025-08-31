const Account = require('../models/signSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userRegister = async(req,res) => {
   

    try {
         const {username,email,password,role} = req.body
        const checkExistUser = await Account.findOne({email})

        if(checkExistUser){
            return res.status(409).json({
                success:false,
                message:'User already exist so please sign up another email..?'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = new Account({
            username,
            email,
            password : hashPassword,
            role: role || 'user'
        })
        await newUser.save()

        res.status(201).json({
            success:true,
            message: 'Account created successfully..🙋‍♂️'
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`Internal server Error ${error.message}`
        })
    }
}

const userLogin = async(req,res) => {
    const {email,password} = req.body
    try {
        const checkEmail = await Account.findOne({email})

        if(!checkEmail){
           res.status(403).json({
            success:false,
            message: 'Invalid email or password'
           })
        }

        const isPassword = await bcrypt.compare(password,checkEmail.password)

        if(!isPassword){
            res.status(403).json({
                success:false,
                message: 'Invalid email or password'
            })
        }

        const accessToken = jwt.sign({
            userId : checkEmail._id,
            username: checkEmail.username,
            role: checkEmail.role
        },process.env.JWT_PRIVATE_KEY,{
            expiresIn: '9m'
        })

        res.status(200).json({
            success:true,
            message:'Login successfully..🥰',
            accessToken
        })
    } catch (error) {
         res.status(500).json({
            success:false,
            message:`Internal server Error ${error.message}`
        })
    }
}

module.exports = {userRegister,userLogin}