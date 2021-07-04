const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UserRoutes=require("./routes/users");

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{UseNewRrlParser: true},()=>{
    console.log("Connected to mongoDB");
});

app.use(express.json());

app.use("/users/api",UserRoutes);



app.listen(8800,()=>{
    console.log("Backend server is running");
})