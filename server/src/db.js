const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.MONGO_URI;


const connectDB = async ()=>{
    try {
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log("Mongoose connection is open");
    } catch (error) {
        console.log("Mongoose connection error", error);
    }
}
module.exports = connectDB