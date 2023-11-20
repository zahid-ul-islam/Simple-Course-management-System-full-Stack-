const express = require('express')
const courseRoute = express.Router()
const courseServices = require('../services/courseServices')
const Course = require('../models/Courses')
const authenticateToken = require('../middleware/authMiddleware')


courseRoute.use(authenticateToken)


courseRoute.post('/courses/:id/enroll', (req,res)=>{
    res.json({message:'Enrolled in the course'})
})
courseRoute.post('/courses', async (req,res)=>{
    try {
        const course = await courseServices.createCourse(req.body);
        res.status(201).json(course)
    } catch (error) {
        res.status(500).json({message:error?.message})
        
    }
})
courseRoute.get('/courses/:id', async (req,res)=>{
    const courseId = req.params.id
    try {
          const course = await courseServices.getCoursesById(courseId)
        if(!courseId){
            return res.status(404).json({message:'Course not found'})
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({message:error?.message})
    }
})
courseRoute.put('/courses/:id', async (req, res)=>{
    const courseId = req.params.id
    try {
        const course = await courseServices.updateCourse(courseId, req.body)
        if(!course){
            return res.status(404).json({message:'course not found'})
        }
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({message:error?.message})
    }
})
courseRoute.delete('/courses/:id', async (req,res)=>{
    const courseId = req.params.id
    try {
        await courseServices.deleteCourse(courseId)
        res.status(204).end()
    } catch (error) {
        res.status(500).json({message:error?.message})  
    }
})
courseRoute.get('/courses', async (req,res)=>{
    const courses = await Course.find()
    res.json(courses)
})


module.exports = courseRoute
 