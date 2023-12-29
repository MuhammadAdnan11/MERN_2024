require("dotenv").config();
const express = require ("express");
const app= express();
const authRoute=require('./router/auth-router');
const contactRoute= require('./router/contact-router');
const connectDb= require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
// Middlewares
app.use(express.json()); // It gives power that in this application we can use json


//////////////
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
// app.get("/", (req,res)=>{
//      res.status(200).send("Welcome to Adnan Khan");
// });

// app.get("/register", (req,res)=>{
//     res.status(200).send("Welcome to registration page");
// });


//starting server
app.use(errorMiddleware);

const PORT=5000;
connectDb().then(()=>{
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
});
}); 