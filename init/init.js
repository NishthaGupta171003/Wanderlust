
require("dotenv").config();

const mongoose=require('mongoose');
const initData =require('./data.js');   
const Listing = require('../models/listing.js');  

const dbUrl=process.env.ATLASDB_URL;
console.log("dbURL:",dbUrl);
async function connect() {
    await mongoose.connect(dbUrl);
}

connect()
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
console.log(err);
});

const initDB = async ()=>{
await Listing.deleteMany({});
initData.data=initData.data.map((obj)=>({...obj,Owner:'685c19482b8fd23daa801731'}));
//map takes callback as arguement and applies it to each element of array and returns a new array
//adding owner property to each element of array
console.log(initData.data);
await Listing.insertMany(initData.data);
};

initDB()
.then(()=>{
    console.log("Success");
})
.catch((err)=>{
    console.log(err);
});

//initData.data is array of listing objects