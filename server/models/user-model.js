const { application } = require("express");
const mongoose = require("mongoose");

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

//define model or the collection name
const User= new mongoose.model("User", userSchema);

module.exports= User;


//models: Acts as a higher-level abstraction that interacts with the database based
// on the defined Schema. It represents a collection and provides an interface for querying, creating ,
// updating, and deleting documents in that collection.
// Models are created from schemas and enable you to work with mongodb data in a more structured manner in your
// application