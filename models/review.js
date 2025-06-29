const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const reviewSchema= new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    Creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now()  //by doing so we dont need to set it bydefault the current date gets set
    }
});

module.exports=mongoose.model("Review",reviewSchema);