const mongoose= require('mongoose');


// const URI= "mongodb+srv://Adnan:<password>@cluster0.8ia5dxa.mongodb.net/";
// const URI= 'mongodb://localhost:27017/mern_admin';
const URI='mongodb+srv://adnan191022:Adnan7527@mern.kxzwajf.mongodb.net/'

// mongoose.connect(URI)


const connectDb= async()=>{
    try {
        await mongoose.connect(URI);
        console.log('connection successful to database');
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports= connectDb;