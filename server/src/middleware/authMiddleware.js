const jwt = require('jsonwebtoken')
require('dotenv').config

const secretKey = process.env.SECRET
const authenticateToken = (req, res, next)=>{
    const token = req.header('Authorization')
    if(!token){
        return res.status(403).json({message:'token not found'})
    }
    jwt.verify(token, secretKey, (err, user)=>{
        if(err){
            return res.status(403).json({message:'invalid token'})
        }
        req.user= user
        next()
    })

}
module.exports = authenticateToken