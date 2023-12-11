const express= require("express");
const router= express.Router();
const {home}= require("../controllers/auth-controller");

// router.get("/",(req,res)=>{
//     res.status(200).send("welcome Adnan");
// })
        
    //OR (below is more prefer)

// router.route("/").get((req,res)=>{
//     res.status(200).send("welcome Adnan");
// })

router.route("/").get(home);

router.route("/register").get((req,res)=>{
    res.status(200).send("Welcome to register pge")
});



module.exports= router;