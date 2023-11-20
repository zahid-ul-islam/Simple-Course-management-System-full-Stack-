const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    coursename: {
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    instructors:[
        {
        type:String,
        
    }
    ] ,
   price: {
        type:String,
        required: true,
    },
    startDate: {
        type:String,
        required: true,
    },

})
const Course = mongoose.model('Course', courseSchema)

module.exports = Course