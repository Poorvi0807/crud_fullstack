const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGODB_URI ;
const connection = mongoose.connect(URI);

const connectDB = async()=>{
    try {
        await connection;
        console.log("MongoDB Connected Successfully");

    } catch (error) {
        console.log("MongoDB Connection Failed");
        console.log(error);
    }
}

module.exports= connectDB;