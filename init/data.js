const sampleListings = [
  {
    title: "Cozy Mountain Cabin",
    description: "A peaceful retreat surrounded by snowy peaks.",
    image:{
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
     filename:"ListingImage"},
    price: 1200,
    location: "Manali",
    country: "India",
    geometry: {
    type: "Point",
    coordinates: [77.1887, 32.2396]
  }
  },
  {
    title: "Beachside Bungalow",
    description: "Enjoy a scenic beach view and calming sea breeze.",
    image:{
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
     filename:"ListingImage"},
    price: 2000,
    location: "Goa",
    country: "India",
    geometry: {
    type: "Point",
    coordinates: [73.8567, 15.2993]
  }
  },
  {
    title: "Urban Apartment",
    description: "Modern apartment located in the city center.",
    image:{
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
     filename:"ListingImage"},
    price: 1500,
    location: "Mumbai",
    country: "India",
    geometry: {
    type: "Point",
    coordinates: [72.8777, 19.0760]
    }
  },
  {
    title: "Countryside Cottage",
    description: "Relax in a cozy cottage surrounded by lush greenery.",
    image: {
      url:"https://media.istockphoto.com/id/2201250101/photo/sarova-mara-game-camp-safari-lodge-in-kenya.webp?a=1&b=1&s=612x612&w=0&k=20&c=azyqQaIHbA1-wNy1_HUw78YVPXPO3RszuBSjdQj9LIc=",
     filename:"ListingImage"},
    price: 9000,
    location: "Udaipur",
    country: "India",
    geometry: {
    type: "Point",
    coordinates:	[73.7125, 24.5854]
    }
  },
  {
    title: "Luxury Villa",
    description: "Experience ultimate luxury with a private pool and ocean view.",
    image: {
      url:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
     filename:"ListingImage"},
    price: 4500,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates:[115.1889, -8.4095]
    },
  },
    { title: "Desert Camp",
    description: "Traditional desert stay under the stars.",
    image:{
      url: "https://media.istockphoto.com/id/152537220/photo/a-camel-in-a-desert-scenario-at-daylight.jpg?s=612x612&w=0&k=20&c=UvpYPGhXNeGpYvOo_z2-pIq30NsCtBMWVSyigZ4Ohq8=",
     filename:"ListingImage"},
    price: 7000,
    location: "Jaisalmer",
    country: "India",
     geometry: {
      type: "Point",
      coordinates:[70.9167, 26.9157]
     },
   },
  {
    title: "Lakeview Cabin",
    description: "Wake up to a beautiful lake view and fresh air.",
    image: {
      url:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
     filename:"ListingImage"},
    price: 1800,
    location: "Nainital",
    country: "India" ,
     geometry: {
    type: "Point",
    coordinates:	[79.4591, 29.3919]
  },
  },
  {
    title: "Himalayan Homestay",
    description: "Stay at a welcoming homestay in the lap of the Himalayas.",
    image: {
      url:"https://media.istockphoto.com/id/2206017798/photo/wild-himalayan-cherry-in-thailand.jpg?s=612x612&w=0&k=20&c=GayvKvTZxw-QH2qobYrEZp93QJ7blDdfHmKSpRnVZC4=",
     filename:"ListingImage"},
    price: 1100,
    location: "Shimla",
    country: "India" ,
     geometry: {
    type: "Point",
    coordinates:	[77.1734, 31.1048]
  },
  },
  {
    title: "Backwater Retreat",
    description: "Tranquil home on the Kerala backwaters.",
    image: {
      url:"https://media.istockphoto.com/id/492851966/photo/houseboat-on-kerala-backwaters-india.jpg?s=612x612&w=0&k=20&c=O7ScGtNvpza7irtnS8wPbFFuyLObAYdasYERouY4p0c=",
     filename:"ListingImage"},
    price: 1350,
    location: "Alleppey",
    country: "India" ,
     geometry: {
    type: "Point",
    coordinates:[76.3375, 9.4981]
  },
  },
  {
    title: "Ski Chalet",
    description: "Perfect stay for ski lovers with a fireplace and hot cocoa.",
    image: {
      url:"https://media.istockphoto.com/id/182702386/photo/ski-in-out.jpg?s=612x612&w=0&k=20&c=x8GxxSwhPYUlMWuzYcQItKobm3wP2Kjo7MFuI2TcNQM=",
     filename:"ListingImage"},
    price: 25000,
    location: "Gulmarg",
    country: "India" ,
     geometry: {
    type: "Point",
    coordinates:[74.3832, 34.0484]
  },
  },
  {
    title: "Jungle Treehouse",
    description: "Get closer to nature in this elevated treehouse.",
    image: {
      url:"https://media.istockphoto.com/id/1154931786/photo/paradise-house-in-the-jungle-with-an-ocean-view-wooden-terrace-blue-sea-and-mountains.jpg?s=612x612&w=0&k=20&c=6ePeeDS0xlDi5t65RP-1BtyHrZryEpVRyXzShsNz8a8=",
    filename:"ListingImage"},
    price: 1600,
    location: "Wayanad",
    country: "India"  ,
     geometry: {
    type: "Point",
    coordinates:[76.1320, 11.6854]
  },
  },
  {
    title: "Riverside Camp",
    description: "Camp along the riverbank with bonfires and music.",
    image: {
      url:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
     filename:"ListingImage"},
    price: 8000,
    location: "Rishikesh",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[78.2676, 30.0869]
  },
  },
  {
    title: "Tea Estate Bungalow",
    description: "Scenic stay surrounded by lush tea plantations.",
    image: {
      url:"https://media.istockphoto.com/id/1485587664/photo/the-original-straw-roof-gazebo-in-the-countryside.jpg?s=612x612&w=0&k=20&c=XjXbECsCAuaTBUhMmCB_guiupZrF2P5GL_-9yKzS83Q=",
    filename:"ListingImage"},
    price: 14000,
    location: "Darjeeling",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[88.2627, 27.0360]
  },
  },
  {
    title: "Forest Log Cabin",
    description: "Stay in a log cabin deep inside a silent forest.",
    image: {
      url:"https://media.istockphoto.com/id/1220728879/photo/maldives-island-jungle-beach-villa-from-above.jpg?s=612x612&w=0&k=20&c=-y-aMZ9N2JdBg7IXp6NpJo34tvKnr1K_0kxJZtbOy9k=",
    filename:"ListingImage"},
    price: 10000,
    location: "Coorg",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[75.8069, 12.3375]
  },
  },
  {
    title: "Hilltop Cottage",
    description: "Panoramic views and cool breezes guaranteed.",
    image:{
      url: "https://images.unsplash.com/photo-1698331403762-076977edca56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGlsbHRvcCUyMENvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
    filename:"ListingImage"},
    price: 13000,
    location: "Mussoorie",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[78.0707, 30.4599]
  },
  },
  {
    title: "Snow Igloo Stay",
    description: "Experience life inside an igloo during the winter season.",
    image: {
      url:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    filename:"ListingImage"},
    price: 1900,
    location: "Spiti Valley",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[78.0045, 32.2461]
  },
  },
  {
    title: "Floating Houseboat",
    description: "Stay afloat on a beautifully crafted houseboat.",
    image: {
      url:"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    filename:"ListingImage"},
    price: 2200,
    location: "Srinagar",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:[74.7973, 34.0837]
  },
  },
  {
    title: "Eco-Friendly Cabin",
    description: "Sustainable stay in harmony with nature.",
    image:{
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    filename:"ListingImage"},
    price: 1000,
    location: "Auroville",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:[79.8105, 12.0050]
  },
  },
  {
    title: "Safari Tent",
    description: "Wildlife views and a luxury tent experience.",
    image: {
      url:"https://plus.unsplash.com/premium_photo-1718204439459-43395c6531e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2FmYXJpJTIwVGVudHxlbnwwfHwwfHx8MA%3D%3D",
    filename:"ListingImage"},
    price: 1750,
    location: "Ranthambore",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[76.5026, 26.0173]
  },
  },
  {
    title: "Colonial Mansion",
    description: "Live in history with this grand colonial mansion.",
    image: {
      url:"https://images.unsplash.com/photo-1706605052201-70860b6b817f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sb25pYWwlMjBNYW5zaW9uJTJDVmludGFnZSUyMFBhbGFjZSUyMFN0YXklMkNSYWluZm9yZXN0JTIwVmlsbGElMkNNaW5pbWFsJTIwWmVuJTIwQ2FiaW4lMkNUcmVlaG91c2UlMjBTdGF5fGVufDB8fDB8fHww",
    filename:"ListingImage"
     },
    price: 2600,
    location: "Pondicherry",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[79.8083, 11.9139]
  },
  },
  {
    title: "Vintage Palace Stay",
    description: "Royal stay in a restored heritage palace.",
    image: {
      url:"https://media.istockphoto.com/id/461264757/photo/restored-renaissance-building-wedding-palace.jpg?s=612x612&w=0&k=20&c=b4ehguVa5x_jUorkhHVk8q91WmDiD9g8TGfywFPpIP8=",
    filename:"ListingImage"
    },
    price: 3000,
    location: "Jaipur",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[75.7873, 26.9124]
  },
  },
  {
    title: "Island Cottage",
    description: "Private cottage on a tranquil island shore.",
    image: {
      url:"https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
      filename:"ListingImage"
    },
    price: 2100,
    location: "Andaman",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:[92.9376, 11.7401]
  },
  },
  {
    title: "Rocky Cliff Resort",
    description: "Stay above the cliffs with a majestic ocean view.",
    image: {
      url:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    filename:"ListingImage"
    },
    price: 23000,
    location: "Varkala",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:[76.7190, 8.7379]
  }
  },
  {
    title: "Rainforest Villa",
    description: "Secluded villa nestled inside a tropical rainforest.",
    image: {
      url:"https://media.istockphoto.com/id/1390080535/photo/abandoned-building-in-the-tropical-forest.jpg?s=612x612&w=0&k=20&c=qZO27O2l18vhurQeyDfq6HYj-JNjiuGe5_1l-FvzItA=",
      filename:"ListingImage"
    },
      price: 17000,
    location: "Meghalaya",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:[91.3662, 25.4670]
    },
  },
  {
    title: "Minimal Zen Cabin",
    description: "Peaceful zen-inspired wooden cabin.",
    image: {
      url:"https://plus.unsplash.com/premium_photo-1746888841261-dbf09e9d672f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWluaW1hbCUyMFplbiUyMENhYmlufGVufDB8fDB8fHww",
    filename:"ListingImage"},
    price: 14500,
    location: "Kasol",
    country: "India",
     geometry: {
    type: "Point",
    coordinates:	[77.3190, 32.0108]
    },
  }
];

module.exports= { data: sampleListings};
//data contains array of objects 