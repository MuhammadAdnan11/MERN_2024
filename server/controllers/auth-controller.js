const User= require("../models/user-model");
const bcrypt= require("bcryptjs")

//Home Logic
const home=async (req,res)=>{
    try{
res
.status(200)
.send("Welcome here friends"
)
    }catch(error){
        console.log(error);
    }
};

//User Registration Logic✅

//? 1. Get registration Data: Retrieve user data( username, email, password).
//?2. Check Email existance; check if the email is already registered. 
//? 3. Hash password: Securely hash the password.
//? 4. Create User: Create a new user with hashed password. 
//? 5. Save to Db; SAve user data to the database. 
//? 6. Respond: respond with "Registration successful" or handle errors.

/////////////////////////////////////////////////
const register=async (req,res)=>{
try{
    console.log(req.body);
    const {username, email, phone, password }= req.body;

const userExit =await User.findOne({email:email});

if(userExit){
    return res.status(400).json({msg:"email already exists"});
}

//hash the password
const saltRound=10;
const hash_password= await bcrypt.hash(password,saltRound);

const userCreated= await User.create({username, email, phone, password:hash_password })

    res.status(200).json({msg: userCreated});
}catch(error){
   res.status(500).json( "internal server error")
}

};


module.exports={home, register};