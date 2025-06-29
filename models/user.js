const mongoose =require("mongoose");

const passportLocalMongoose=require("passport-local-mongoose");

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
});
// passportLocalMongoose creates some essential methods likes authenticate and gives it to the model 
//passportLocalMongoose adds hashed password does salting,also gives a username

userSchema.plugin(passportLocalMongoose);

module.exports= mongoose.model("User",userSchema);

