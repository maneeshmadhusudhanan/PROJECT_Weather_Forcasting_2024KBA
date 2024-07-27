const express = require("express");
const router = express.Router();
const Location = require("../models/location");
// const verifyToken = require("../middleware/authMiddleware")

// GET all locations
router.get("/savedlocation", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new location
router.post("/savelocation", async (req, res) => {
  const location = new Location({
    city: req.body.city,
    country: req.body.country,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// -------------------=======-------------------------------------------
// DELETE a location by ID



// router.delete("/location/:id", verifyToken, async (req, res) => {
//     const locationId = req.params.id;
//     if (req.userType !== 'user') {
//       return res.status(401).json({ error: "Authentication failed" });
//     }
//     try {
//       const deletedLocation = await location.findOneAndDelete({ locationId: locationId });
//       if (!deletedLocation) {
//         return res.status(404).send("Location not found");
//       }
//       res.send("Location deleted successfully");
//     } catch (error) {
//       res.status(500).send("Server error");
//     }
//   });


// router.delete('/location', async(req, res) => {
//     try{
//     const id = req.params.id;
//     const del=await Location.findByIdAndDelete(id);
//     console.log(del);
//     if (del) {
//         res.status(200).json({message:'Deleted successfully'})
//     }
//     else{
//         res.status(404).json({message:'delete not found'})
//     }
//     }
//     catch(error){
//         res.status(500).json({message:error.message})
//     }
// });


// router.delete('/location/:id', async (req, res) => {
//     try {

//         id=req.params.id;
//         console.log(id);
//       const location = await Location.deleteOne(id);
      
//       if (!location) {
//         return res.status(404).send({ message: 'Location not found' });
//       }
//       res.send({ message: 'Location deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting location:', error);
//       res.status(500).send({ message: 'Server error' });
//     }
//   });





// router.delete("/locations/:id", async (req, res) => {
//   try {
//     const deletedLocation = await Location.findByIdAndDelete(req.params.id);
//     if (!deletedLocation) {
//       return res.status(404).json({ error: 'Location not found' });
//     }
//     res.json({ message: 'Location deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting location:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// -----------------------------------=======--------------------------------------
module.exports = router;
