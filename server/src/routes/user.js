const express = require('express')
const { userRegistration } = require('../services/userServices')
const userRouter = express.Router()
userRouter.post('/register', async (req,res)=>{
    const {username, email, password} = req.body
    if(!username||!email||!password){
        return res.status(400).json({message:"please fill all the data"})
    }
    try {
       await userRegistration({username, email, password})
       res.status(201).json({message:'registration successful'})
    } catch (error) {
        res.status(500).json({message:error?.message})
        
    }

})
module.exports= userRouter