const Review= require('../models/review');
const Listing=require('../models/listing');
const User=require('../models/user');

module.exports.createReview=async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview= new Review(req.body.reviews);
    
    let user = res.locals.currUser._id;

    console.log(user);
    newReview.Creator=user;
    listing.reviews.push(newReview);
     
    await newReview.save();
    await listing.save();
    req.flash("success","Review created successfully!");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.deleteReview=async (req,res)=>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted successfully!");
    res.redirect(`/listings/${id}`);
};

