require("dotenv").config();
const express = require ("express");
const app= express();
const router=require('./router/auth-router');
const connectDb= require('./utils/db');
// Middlewares
app.use(express.json()); // It gives power that in this application we can use json


//////////////
app.use("/api/auth",router);

// app.get("/", (req,res)=>{
//      res.status(200).send("Welcome to Adnan Khan");
// });

// app.get("/register", (req,res)=>{
//     res.status(200).send("Welcome to registration page");
// });


//starting server
const PORT=5000;

connectDb().then(()=>{
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
});
}); 