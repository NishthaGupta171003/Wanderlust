const express= require('express');
const router=express.Router({mergeParams:true});
const Listing=require('../models/listing');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');
const wrapAsync=require('../utils/wrapAsync.js');
const ExpressError=require('../utils/ExpressError.js');
const { listingSchema,reviewSchema }=require('../schema.js');
const { isAuthorized,validateListing,isLoggedIn }=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");

const upload=multer({storage});
//Show route
router.get('/',wrapAsync(listingController.indexListing));

router.get('/new',
    isLoggedIn,
    listingController.createListingFormRender); 

//create new listing
router.post(
    '/create',
     isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing));
       
    

//Show individual
router.get('/:id',
    isLoggedIn,
    wrapAsync(listingController.showListing));

router.get('/:id/edit',
    isLoggedIn,
    isAuthorized,
    wrapAsync(listingController.editListingFormRender));

//Update Route
router.put('/:id/update',
    isLoggedIn,
    isAuthorized,
    validateListing,
    wrapAsync(listingController.updateListing));

//Delete Route
router.delete('/:id',
    isLoggedIn,
    isAuthorized,
    wrapAsync(listingController.deleteListing));


router.use((err,req,res,next)=>{
    let{statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).render('error.ejs',{message});

});

module.exports=router;