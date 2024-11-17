const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req,res)=>{
    try {
        res.send("Hello, world! This is a response from the root controller.");
    } catch (error) {
        console.log(error);
    }
   
}
const register = async(req,res)=>{
    try {
        console.log(req.body);
        const {username,email,phone,password} = req.body;
        if (!username || !email || !phone || !password) {
            return res.status(400).send("All fields are required");
        }
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).send("User Already Exist!");
        }
        const saltRound = 10;
        const hashed_password= await bcrypt.hash(password,saltRound);
        const createdUser = await User.create({username,email,phone,password:hashed_password});
        await createdUser.save();
        res.send("Register Successfully");
    } catch (error) {
        console.log(error);
        console.log("Registration Failed");
    }
    
}
const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).send("User doesnot Exist!");
        }
        const isPasswordMatch = await bcrypt.compare(password, userExist.password);
        if (!isPasswordMatch) {
             return res.status(400).send("Invalid credentials");
                }
        // const user = await bcrypt.comparePassword(password,userExist.password);
       
        res.send("Login Successfully");
    } catch (error) {
        console.log(error);
    }
    
}
module.exports= {home,register,login};