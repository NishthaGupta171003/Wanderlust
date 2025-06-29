const express= require('express');
const router=express.Router({mergeParams:true});
const Review= require('../models/review');
const Listing=require('../models/listing');
const wrapAsync=require('../utils/wrapAsync.js');
const ExpressError=require('../utils/ExpressError.js');
const { listingSchema,reviewSchema }=require('../schema.js');
const { isAuthorized,validateReview,isLoggedIn,IsReviewAuthor}=require("../middleware.js");
const reviewControlller=require("../controllers/reviews.js");


// /listings/:id/reviews common part ko replace kar denge '/' se /listings common tha usko "/ se replace kar diye the same yahan pe bhi"
//Post Reviews Route
router.post("/",validateReview,wrapAsync(reviewControlller.createReview));

//Delete Reviews Route
router.delete("/:reviewId",IsReviewAuthor,wrapAsync(reviewControlller.deleteReview));

router.use((err,req,res,next)=>{
    let{statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).render('error.ejs',{message});

});

module.exports=router;