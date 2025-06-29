const User= require("../models/user.js");

module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");   //views ke andar kahan milega yeh daalte hain ejs mein
}

module.exports.signup=async(req,res)=>{
   try{
        let {email,username,password}=req.body;
        let newUser= new User({email:email,username:username});
        let registeredUser =await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
        if (err) return next(err);
        req.flash("success", "Welcome to Wanderlust!");
        res.redirect("/listings");
    })}catch(e){
        req.flash("error",e);
        res.redirect("/signup");
    }
}


module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.logOut=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logged you out!");
        res.redirect("/listings");
    })},

module.exports.login=(req,res)=>{
            req.flash("success","Welcome back to Wanderlust!");
            res.redirect("/listings");
    }