require("dotenv").config();

const Listing = require("../models/listing");
const { listingSchema, reviewSchema } = require("../schema.js");
const mapToken = process.env.MAP_TOKEN;

//Show All Listings-Index Route
module.exports.indexListing = async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing }); //pass karo kuch bhi ejs mein pass it in curly braces
};

//Render from to create new listing
module.exports.createListingFormRender = (req, res) => {
  res.render("listings/new.ejs");
};
//Create Route

module.exports.createListing = async (req, res) => {
  const url = req.file.path;
  const filename = req.file.filename;
  const listing = req.body.listing;
  const newListing = new Listing(listing);
  newListing.Owner = req.user._id;
  console.log(newListing);
  newListing.image = { url, filename };

  const resposne = await fetch(
    `https://us1.locationiq.com/v1/search?key=${mapToken}&q=${encodeURIComponent(
      listing.location
    )}&format=json`
  );
  const data = await resposne.json();
  newListing.geometry.coordinates = [data[0].lon, data[0].lat];
  await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

//Show Route
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id).populate({
    path: "reviews",
    populate: {
      path: "Creator",
      select: "username",
    }
  }).populate("Owner");
  console.log(listing);
  if (!listing) {
    req.flash("error", "Listing you requested is deleted");
    res.redirect(`/listings/${id}`);
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

//Edit Route
module.exports.editListingFormRender = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested is deleted");
    res.redirect(`/listings/${id}`);
  }
  res.render("listings/edit.ejs", { listing });
};

//Update Route
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { runValidators: true, new: true }
  );
  if (!listing) {
    req.flash("error", "Listing you requested is deleted");
    res.redirect(`/listings/${id}`);
  }
  req.flash("success", "Listing updated successfully!");
  // req.body={listing:{title:.....,image:....}} to update dont use req.body  req.body.listing is more appropriate
  res.redirect(`/listings/${id}`); //"/${id}" karne se page not found bol raha tha
};

//Delete Route
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted successfully!");
  res.redirect("/listings");
  // res.send("Radha");
};
