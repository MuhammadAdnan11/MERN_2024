const express= require("express");
const router= express.Router();

const authcontrollers=require("../controllers/auth-controller");
const signupSchema= require("../validators/auth-validators");
const validate= require('../middlewares/validate-middlewares');
//instead of all time adding pages link like below so its not best way
const {home}= require("../controllers/auth-controller");
const {register}= require("../controllers/auth-controller");
const {login}=require("../controllers/auth-controller");

//////////////////////////////////////////
// router.get("/",(req,res)=>{
//     res.status(200).send("welcome Adnan");
// })
        
    //OR (below is more prefer)

// router.route("/").get((req,res)=>{
//     res.status(200).send("welcome Adnan");
// })
////////////////////////////////////////////////////////
router.route("/").get(authcontrollers.home);

// router.route("/register").get((req,res)=>{
//     res.status(200).send("Welcome to register pge")
// });

router.route("/register").post(validate(signupSchema), authcontrollers.register)
// router.route("/login").post(authcontrollers.login)
router.route("/login" ).post(authcontrollers.login)


module.exports= router;   