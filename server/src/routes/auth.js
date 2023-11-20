const jwt = require('jsonwebtoken')
require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const { getUserByUsernameOrEmail } = require('../services/userServices')

const authRoutes = express.Router()

authRoutes.post('/login', async (req,res)=>{
    const {username, password}= req.body
    const user = await getUserByUsernameOrEmail({username})
    if(!user){
        return res.status(401).json({message:'username not found'})
    }
    const passCheck = await bcrypt.compare(password, user.password)
    if(!passCheck){
        return res.status(401).json({message:"wrong password"})
    }
    const token = jwt.sign({username},process.env.SECRET, {expiresIn: process.env.TOKEN_DURATION })
    res.json({token})
     
})
module.exports= authRoutes