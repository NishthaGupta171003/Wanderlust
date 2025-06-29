const mongoose = require("mongoose");
const Review = require("./review.js");

let listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  location: String,
  country: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review", //name the model whose document Id we are passing
      //Relation becomes between the two documents of a document and group of documents
    },
  ],
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // we we defoined schema owner was not included
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    let result = await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
