const mongoose = require("mongoose");
const bcrypt= require("bcryptjs")
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



//define model or the collection name
const User= new mongoose.model("User", userSchema);

module.exports= User;


//models: Acts as a higher-level abstraction that interacts with the database based
// on the defined Schema. It represents a collection and provides an interface for querying, creating ,
// updating, and deleting documents in that collection.
// Models are created from schemas and enable you to work with mongodb data in a more structured manner in your
// application