const express=require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const userController=require("../controllers/users.js");

router.get("/signup",userController.renderSignupForm);


router.post("/signup",wrapAsync(userController.signup));

router.get("/login",userController.renderLoginForm);

router.post(
    "/login",
    passport.authenticate("local",{
        failureRedirect:"/login",
        failureFlash:true
    }),
    userController.login);

router.get("/logout",userController.logOut);

//passport authenticates the user whether user exists or not
//passsport.authenticate()=middleware
//it takes two i/p parameters strategy here we are using local strategy
//other i/p is failureRedirect Route to which we get redirected if user doesnot exist already
 //    failureFlash:true means we are going to give flash message in case of any failure 
module.exports=router;


