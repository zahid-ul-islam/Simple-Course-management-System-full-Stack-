const Course = require("../models/Courses")


const createCourse = async (courseData)=>{
    const course = new Course(courseData)
    await course.save()
    return course
}


const getCoursesById = async (courseId)=> await Course.findById(courseId)

const updateCourse = async (courseId, updateData)=>{
    const course = await Course.findByIdAndUpdate(courseId, updateData, {new:true},)
    return course
}

const deleteCourse = async (courseId)=> await Course.findByIdAndRemove(courseId)
const courseServices ={
    createCourse, getCoursesById, updateCourse, deleteCourse
}
module.export= courseServices