const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");
const userSchema= new mongoose.Schema({
    
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type:String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }, 

})

///? Secure the password with the bcrypt
userSchema.pre('save', async function(next){
    // console.log("pre method", this);
    const user= this;

    if(!user.isModified("password")){
        next();
    }
    try {
        const saltRound=await bcrypt.genSalt(10);
        const hash_password= await bcrypt .hash(user.password, saltRound);
        user.password= hash_password;
    } catch (error) {
        next(error);
    }
});

//////////////

//What is JWT?
//Json web token is an open standard that defines a compact and self-contained way
// for secruely transmitting information between parties as a json object.
//JWT are often used for authentication and authorization in web applications.
//!Authentication: verifying the identity of a user or client.
//! Authroization: Determining what actions a user or client is allowed to perform.
//Components of JET
//a) Header b)Payload 3) Signature

//? Json web token
userSchema.methods.generateToken= function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, 
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        }
        );
    } catch (error) {
        console.error(error)
    }

};

///////////////////

//define model or the collection name
const User= new mongoose.model("User", userSchema);

module.exports= User;


//models: Acts as a higher-level abstraction that interacts with the database based
// on the defined Schema. It represents a collection and provides an interface for querying, creating ,
// updating, and deleting documents in that collection.
// Models are created from schemas and enable you to work with mongodb data in a more structured manner in your
// application