const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const authRouter = require("./router/auth-router");

const app = express();

const PORT = 8080;


const corsOption = {
    // origin : "http://127.0.0.1:5173",
    origin:"http://127.0.0.1:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

app.use(express.json());
app.use(cors(corsOption));
app.use("/api/auth",authRouter);
// app.get("/", (req,res)=>{
//      res.send("Hello, World");
// })

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Listening on ${PORT}`);
    })
})
