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
// const saltRound=10;
// const hash_password= await bcrypt.hash(password,saltRound);
/////////////////////////////////////////////
// const userCreated= await User.create({username, email, phone, password:hash_password })

const userCreated= await User.create({username, email, phone, password })

    res.status(201).json({
        msg:"registration successful", token: await userCreated.generateToken(), 
        userId: userCreated._id.toString(),
});
}catch(error){
   res.status(500).json( "internal server error")
}

};

// *------------------------------
// * User Login Logic
//*------------------------------
const login= async(req,res)=>{
    try {
        const {email, password}=req.body;
        
        const userExist= await User.findOne({email});
        console.log(userExist)
        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }
        // const user= await bcrypt.compare(password,userExist.password)
        const user= await userExist.comparePassword(password);



        if(user){
            res.status(200).json({
                msg:"Login Successful",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            })
        }else{
            res.status(401).json({message:"Invalid email or password"});
        }

    } catch (error) {
        res.status(500).json("internal server error");
    }
}
 

module.exports={home, register, login};